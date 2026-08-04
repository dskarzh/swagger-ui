/*
 * SPDX-FileCopyrightText: Modifications Copyright (C) 2024-present ThingsBoard, Inc.
 * This file has been modified from the original swagger-ui source.
 * See the project's Git history for details of the changes.
 */
window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    url: "https://petstore.swagger.io/v2/swagger.json",
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl,
      SwaggerUIBundle.plugins.HttpLoginAuth
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
