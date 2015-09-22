/*
 * JBoss, Home of Professional Open Source.
 * Copyright 2010, Red Hat, Inc., and individual contributors
 * as indicated by the @author tags. See the copyright.txt file in the
 * distribution for a full listing of individual contributors.
 *
 * This is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation; either version 2.1 of
 * the License, or (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this software; if not, write to the Free
 * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301 USA, or see the FSF site: http://www.fsf.org.
 */
package org.jboss.hal.client.bootstrap;

import com.gwtplatform.mvp.client.Bootstrapper;
import com.gwtplatform.mvp.client.proxy.PlaceManager;
import elemental.client.Browser;
import org.jboss.gwt.flow.Async;
import org.jboss.gwt.flow.Outcome;
import org.jboss.gwt.flow.Progress;
import org.jboss.hal.client.bootstrap.endpoint.EndpointSelection;
import org.jboss.hal.client.bootstrap.functions.BootstrapFunctions;
import org.jboss.hal.core.flow.FunctionContext;
import org.jboss.hal.resources.I18n;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.inject.Inject;

/**
 * @author Harald Pehl
 */
public class HalBootstrapper implements Bootstrapper {

    private static final Logger logger = LoggerFactory.getLogger(HalBootstrapper.class);

    private final PlaceManager placeManager;
    private final EndpointSelection endpointSelection;
    private final BootstrapFunctions bootstrapFunctions;
    private final I18n i18n;

    @Inject
    public HalBootstrapper(final PlaceManager placeManager,
            final EndpointSelection endpointSelection,
            final BootstrapFunctions bootstrapFunctions,
            final I18n i18n) {
        this.placeManager = placeManager;
        this.endpointSelection = endpointSelection;
        this.bootstrapFunctions = bootstrapFunctions;
        this.i18n = i18n;
    }

    @Override
    public void onBootstrap() {
        LoadingPanel.get().on();

        Outcome<FunctionContext> outcome = new Outcome<FunctionContext>() {
            @Override
            public void onFailure(final FunctionContext context) {
                LoadingPanel.get().off();
                logger.error("Bootstrap error: {}", context.getErrorMessage());
                Browser.getDocument().getBody().appendChild(
                        BootstrapFailed.create(i18n.constants().bootstrap_exception(), context.getErrorMessage(), true)
                                .asElement());
            }

            @Override
            public void onSuccess(final FunctionContext context) {
                LoadingPanel.get().off();
                placeManager.revealCurrentPlace();
            }
        };

        new Async<FunctionContext>(Progress.NOOP).waterfall(
                new FunctionContext(), outcome, bootstrapFunctions.functions());
/*
        endpointSelection.select(
                () -> {
                    LoadingPanel.get().on();
                    new Async<FunctionContext>(Progress.NOOP).waterfall(
                            new FunctionContext(), outcome, bootstrapFunctions.functions());
                });
*/
    }
}