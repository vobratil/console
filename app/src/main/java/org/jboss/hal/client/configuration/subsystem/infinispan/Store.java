/*
 * Copyright 2015-2016 Red Hat, Inc, and individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.jboss.hal.client.configuration.subsystem.infinispan;

import org.jboss.hal.dmr.ModelDescriptionConstants;
import org.jboss.hal.resources.Ids;
import org.jboss.hal.resources.Names;

/**
 * @author Harald Pehl
 */
public enum Store {

    BINARY_JDBC(Ids.CACHE_STORE_BINARY_JDBC, Names.BINARY_JDBC, ModelDescriptionConstants.BINARY_JDBC),
    CUSTOM(Ids.CACHE_STORE_CUSTOM, Names.CUSTOM, ModelDescriptionConstants.CUSTOM),
    FILE(Ids.CACHE_STORE_FILE, Names.FILE, ModelDescriptionConstants.FILE),
    MIXED_JDBC(Ids.CACHE_STORE_MIXED_JDBC, Names.MIXED_JDBC, ModelDescriptionConstants.MIXED_JDBC),
    NONE(Ids.CACHE_STORE_NONE, Names.NONE, ModelDescriptionConstants.NONE),
    REMOTE(Ids.CACHE_STORE_REMOTE, Names.REMOTE, ModelDescriptionConstants.REMOTE),
    STORE(Ids.CACHE_STORE_STORE, Names.STORE, ModelDescriptionConstants.STORE),
    STRING_JDBC(Ids.CACHE_STORE_STRING_JDBC, Names.STRING_JDBC, ModelDescriptionConstants.STRING_JDBC);

    final String baseId;
    final String type;
    final String resource;

    Store(final String baseId, final String type, final String resource) {
        this.baseId = baseId;
        this.type = type;
        this.resource = resource;
    }

    String path() {
        return STORE + "/" + resource;
    }
}
