/*
 * Copyright 2015-2016 Red Hat, Inc, and individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.jboss.hal.client.configuration.subsystem.datasource;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import java.util.stream.Collectors;

import javax.inject.Inject;
import javax.inject.Provider;

import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.gwtplatform.mvp.shared.proxy.PlaceRequest;
import org.jboss.hal.ballroom.form.Form;
import org.jboss.hal.ballroom.form.FormItem;
import org.jboss.hal.config.Environment;
import org.jboss.hal.core.CrudOperations;
import org.jboss.hal.core.OperationFactory;
import org.jboss.hal.core.datasource.DataSource;
import org.jboss.hal.core.finder.Finder;
import org.jboss.hal.core.finder.FinderPath;
import org.jboss.hal.core.finder.FinderPathFactory;
import org.jboss.hal.core.mvp.ApplicationFinderPresenter;
import org.jboss.hal.core.mvp.HalView;
import org.jboss.hal.core.mvp.HasPresenter;
import org.jboss.hal.core.mvp.SupportsExpertMode;
import org.jboss.hal.core.runtime.TopologyTasks;
import org.jboss.hal.core.runtime.server.Server;
import org.jboss.hal.dmr.Composite;
import org.jboss.hal.dmr.CompositeResult;
import org.jboss.hal.dmr.ModelNode;
import org.jboss.hal.dmr.Operation;
import org.jboss.hal.dmr.Property;
import org.jboss.hal.dmr.ResourceAddress;
import org.jboss.hal.dmr.dispatch.Dispatcher;
import org.jboss.hal.flow.FlowContext;
import org.jboss.hal.flow.FlowException;
import org.jboss.hal.flow.Outcome;
import org.jboss.hal.flow.Progress;
import org.jboss.hal.flow.Task;
import org.jboss.hal.meta.Metadata;
import org.jboss.hal.meta.MetadataRegistry;
import org.jboss.hal.meta.StatementContext;
import org.jboss.hal.meta.token.NameTokens;
import org.jboss.hal.resources.Ids;
import org.jboss.hal.resources.Names;
import org.jboss.hal.resources.Resources;
import org.jboss.hal.spi.Footer;
import org.jboss.hal.spi.Message;
import org.jboss.hal.spi.MessageEvent;
import org.jboss.hal.spi.Requires;
import org.jetbrains.annotations.NonNls;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import rx.Completable;

import static org.jboss.hal.client.configuration.subsystem.datasource.AddressTemplates.DATA_SOURCE_ADDRESS;
import static org.jboss.hal.client.configuration.subsystem.datasource.AddressTemplates.DATA_SOURCE_TEMPLATE;
import static org.jboss.hal.client.configuration.subsystem.datasource.AddressTemplates.XA_DATA_SOURCE_ADDRESS;
import static org.jboss.hal.client.configuration.subsystem.datasource.AddressTemplates.XA_DATA_SOURCE_TEMPLATE;
import static org.jboss.hal.dmr.ModelDescriptionConstants.*;
import static org.jboss.hal.flow.Flow.series;

/** Presenter which is used for both XA and normal data sources. */
public class DataSourcePresenter
        extends ApplicationFinderPresenter<DataSourcePresenter.MyView, DataSourcePresenter.MyProxy>
        implements SupportsExpertMode {

    static final String XA_PARAM = "xa";
    @NonNls private static final Logger logger = LoggerFactory.getLogger(DataSourcePresenter.class);

    private Dispatcher dispatcher;
    private final CrudOperations crud;
    private Environment environment;
    private OperationFactory operationFactory;
    private final FinderPathFactory finderPathFactory;
    private Resources resources;
    private Provider<Progress> progress;
    private final MetadataRegistry metadataRegistry;
    private final StatementContext statementContext;
    private String name;
    private boolean xa;

    @Inject
    public DataSourcePresenter(EventBus eventBus,
            MyView view,
            MyProxy proxy,
            Finder finder,
            Dispatcher dispatcher,
            CrudOperations crud,
            Environment environment,
            OperationFactory operationFactory,
            FinderPathFactory finderPathFactory,
            Resources resources,
            @Footer Provider<Progress> progress,
            MetadataRegistry metadataRegistry,
            StatementContext statementContext) {
        super(eventBus, view, proxy, finder);
        this.dispatcher = dispatcher;
        this.crud = crud;
        this.environment = environment;
        this.operationFactory = operationFactory;
        this.finderPathFactory = finderPathFactory;
        this.resources = resources;
        this.progress = progress;
        this.metadataRegistry = metadataRegistry;
        this.statementContext = statementContext;
    }

    @Override
    protected void onBind() {
        super.onBind();
        getView().setPresenter(this);
    }

    @Override
    public void prepareFromRequest(PlaceRequest request) {
        super.prepareFromRequest(request);
        name = request.getParameter(NAME, null);
        xa = Boolean.valueOf(request.getParameter(XA_PARAM, String.valueOf(false)));
    }

    @Override
    public ResourceAddress resourceAddress() {
        return xa
                ? XA_DATA_SOURCE_TEMPLATE.resolve(statementContext, name)
                : DATA_SOURCE_TEMPLATE.resolve(statementContext, name);
    }

    @Override
    protected void onReset() {
        super.onReset();
        reload();
    }

    @Override
    public FinderPath finderPath() {
        return finderPathFactory.configurationSubsystemPath(DATASOURCES)
                .append(Ids.DATA_SOURCE_DRIVER, DATASOURCES, Names.DATASOURCES_DRIVERS, Names.DATASOURCES)
                .append(Ids.DATA_SOURCE_CONFIGURATION, Ids.dataSourceConfiguration(name, xa), Names.DATASOURCE, name);
    }

    @Override
    protected void reload() {
        crud.read(resourceAddress(), 1, result -> getView().update(new DataSource(name, result, xa)));
    }

    void saveDataSource(Form<DataSource> form, Map<String, Object> changedValues, Map<String, String> existing) {
        FormItem<Map<String, String>> propertiesItem = form.getFormItem(propertiesName());
        Composite operations = operationFactory.fromChangeSet(resourceAddress(), changedValues, metadata());
        if (propertiesItem != null) {
            Map<String, String> properties = propertiesItem.getValue();
            // remove properties
            existing.forEach((existingName, existingValue) -> {
                String newValue = properties.get(existingName);
                if (!existingValue.equals(newValue)) {
                    ResourceAddress propAddress = new ResourceAddress(resourceAddress()).add(propertiesName(), existingName);
                    Operation operation = new Operation.Builder(propAddress, REMOVE)
                            .build();
                    operations.add(operation);
                }
            });

            // add properties
            properties.forEach((name, newValue) -> {
                String existingValue = existing.get(name);
                if (!newValue.equals(existingValue)) {
                    ResourceAddress propAddress = new ResourceAddress(resourceAddress()).add(propertiesName(), name);
                    Operation operation = new Operation.Builder(propAddress, ADD)
                            .param(VALUE, newValue)
                            .build();
                    operations.add(operation);
                }
            });
        }
        dispatcher.execute(operations, (CompositeResult compositeResult) -> {
            reload();
            MessageEvent.fire(getEventBus(), Message.success(resources.messages().modifyResourceSuccess(type(), name)));
        });
    }

    public void readJdbcDriverProperties(boolean isXa, final String dsClassname, String driverName,
            Consumer<List<String>> callback) {
        List<Task<FlowContext>> tasks = new ArrayList<>();

        // check running server(s)
        if (!environment.isStandalone()) {
            tasks.add(new TopologyTasks.RunningServersQuery(environment, dispatcher, environment.isStandalone()
                    ? null : new ModelNode().set(PROFILE_NAME, statementContext.selectedProfile())));
        }

        // read jdbc-driver datasource properties
        tasks.add(flowContext -> {
            ResourceAddress address;
            if (environment.isStandalone()) {
                address = Server.STANDALONE.getServerAddress();
            } else {
                List<Server> servers = flowContext.get(TopologyTasks.RUNNING_SERVERS);
                if (!servers.isEmpty()) {
                    Server server = servers.get(0);
                    address = server.getServerAddress();
                } else {
                    String message = resources.messages()
                            .readDatasourcePropertiesErrorDomain(statementContext.selectedProfile());
                    return Completable.error(new FlowException(message, flowContext));
                }
            }
            address.add(SUBSYSTEM, DATASOURCES).add(JDBC_DRIVER, driverName);
            Operation operation = new Operation.Builder(address, READ_RESOURCE_OPERATION)
                    .param(INCLUDE_RUNTIME, true)
                    .build();
            return dispatcher.execute(operation)
                    .doOnSuccess(result -> flowContext.set(RESULT, result))
                    .toCompletable();
        });

        series(new FlowContext(progress.get()), tasks)
                .subscribe(new Outcome<FlowContext>() {
                    @Override
                    public void onError(FlowContext flowContext, Throwable error) {
                        logger.warn("Failed to read jdbc-driver. Cause: {}", error.getMessage());
                    }

                    @Override
                    public void onSuccess(FlowContext flowContext) {
                        ModelNode result = flowContext.get(RESULT);
                        List<String> properties = Collections.emptyList();
                        final String datasourceClassname;
                        if (dsClassname == null) {
                            String attribute = isXa ? DRIVER_XA_DATASOURCE_CLASS_NAME : DRIVER_DATASOURCE_CLASS_NAME;
                            datasourceClassname = result.get(attribute).asString();
                        } else {
                            datasourceClassname = dsClassname;
                        }
                        if (result.hasDefined(DATASOURCE_CLASS_INFO)) {
                            properties = result.get(DATASOURCE_CLASS_INFO).asList().stream()
                                    .filter(node -> datasourceClassname.equals(node.asProperty().getName()))
                                    .flatMap(node -> node.asProperty().getValue().asPropertyList().stream())
                                    .map(Property::getName)
                                    .collect(Collectors.toList());
                        }
                        callback.accept(properties);
                    }
                });
    }

    void resetDataSource(Form<DataSource> form) {
        crud.reset(type(), name, resourceAddress(), form, metadata(), this::reload);
    }

    private String type() {
        return xa ? Names.DATASOURCE : Names.XA_DATASOURCE;
    }

    private String propertiesName() {
        return xa ? XA_DATASOURCE_PROPERTIES : CONNECTION_PROPERTIES;
    }

    private Metadata metadata() {
        return metadataRegistry.lookup(xa ? XA_DATA_SOURCE_TEMPLATE : DATA_SOURCE_TEMPLATE);
    }


    // @formatter:off
    @ProxyCodeSplit
    @NameToken(NameTokens.DATA_SOURCE_CONFIGURATION)
    @Requires({DATA_SOURCE_ADDRESS, XA_DATA_SOURCE_ADDRESS})
    public interface MyProxy extends ProxyPlace<DataSourcePresenter> {
    }

    public interface MyView extends HalView, HasPresenter<DataSourcePresenter> {
        void clear(boolean xa);
        void update(DataSource dataSource);
    }
    // @formatter:on
}
