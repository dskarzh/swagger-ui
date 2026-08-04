# Swagger UI

[Swagger UI](https://swagger.io/tools/swagger-ui/) allows anyone — be it your
development team or your end consumers — to visualize and interact with the
API's resources without having any of the implementation logic in place.

This repository is the ThingsBoard-maintained fork of
[swagger-api/swagger-ui](https://github.com/swagger-api/swagger-ui), consumed
by the
[ThingsBoard fork of springdoc-openapi](https://github.com/thingsboard/springdoc-openapi)
as a GitHub archive of a `TB`-suffixed tag when packaging the
`springdoc-swagger-ui` webjar. The fork differs from the upstream 5.21.0
release as follows:

+ A new ThingsBoard-authored `HttpLoginAuth` plugin
  (`src/core/plugins/http-login-auth/`) adds a username/password login
  authorization scheme that obtains a JWT token and applies it to requests;
  it is registered in `src/core/index.js` and enabled in
  `dist/swagger-initializer.js`.
+ `src/core/components/responses.jsx`, `src/core/components/live-response.jsx`
  and `src/style/_layout.scss` rework how the live response to a "Try it out"
  request is presented. The modified files carry their own modification
  notices.
+ `package.json` and `package-lock.json` set the version to the fork's
  `TB`-suffixed form.
+ The `dist` bundles are rebuilt from this fork's sources.
+ `dist/swagger-ui-bundle.js.map`, `dist/swagger-ui-es-bundle.js.map` and
  `dist/swagger-ui-standalone-preset.js.map` are deleted. The fork's build
  does not generate source maps for these three bundles, none of the bundles
  references a map, and the committed files were stale leftovers from an
  earlier release that no longer described the bundles next to them.

The list above serves as the modification notice required by section 4(b) of
the Apache License 2.0 for the changed files that cannot carry an in-file
notice, such as the JSON manifests and the regenerated bundles.

## License

Swagger UI is licensed under the Apache License, Version 2.0. See
[LICENSE](LICENSE) for the full license text.

The attribution notices of the original work are preserved in the
[NOTICE](NOTICE) file.
