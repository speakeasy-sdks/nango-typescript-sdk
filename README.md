# Nango-API

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/productionize-sdks/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/Nango-sample-sdk
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/Nango-sample-sdk
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { NangoAPI } from "Nango-API";

async function run() {
    const sdk = new NangoAPI();

    const result = await sdk.listIntegrations();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [NangoAPI SDK](docs/sdks/nangoapi/README.md)

* [listIntegrations](docs/sdks/nangoapi/README.md#listintegrations) - Returns a list of integrations including their unique keys and providers as configured in the Nango API.
* [createIntegration](docs/sdks/nangoapi/README.md#createintegration) - Create a new integration including its provider configuration, OAuth details if applicable, and associated integration ID.
* [updateIntegration](docs/sdks/nangoapi/README.md#updateintegration) - Edit an integration, specifically tailored for OAuth APIs, updating the provider configuration along with OAuth client ID and secret.
* [getIntegration](docs/sdks/nangoapi/README.md#getintegration) - Returns details of a specific integration identified by its provider configuration key, optionally including credentials if specified.
* [deleteIntegration](docs/sdks/nangoapi/README.md#deleteintegration) - Deletes a specific integration identified by its provider configuration key.
* [listConnections](docs/sdks/nangoapi/README.md#listconnections) - Returns a list of connections, optionally filtered by connection ID.
* [createConnections](docs/sdks/nangoapi/README.md#createconnections) - Adds a connection using an existing access token, along with optional OAuth or basic authentication credentials, and additional metadata or configuration.
* [getConnections](docs/sdks/nangoapi/README.md#getconnections) - Returns details of a specific connection identified by its connection ID, associated with the specified integration, with optional parameters for force refresh and returning the refresh token.
* [deleteConnections](docs/sdks/nangoapi/README.md#deleteconnections) - Deletes a specific connection identified by its connection ID, associated with the specified integration.
* [createMetadata](docs/sdks/nangoapi/README.md#createmetadata) - Set custom metadata for the specified connection.
* [updateMetadata](docs/sdks/nangoapi/README.md#updatemetadata) - Update custom metadata for the specified connection.
* [getRecord](docs/sdks/nangoapi/README.md#getrecord) - Returns data synced with Nango Sync, filtered by specified parameters.
* [getSyncRecord](docs/sdks/nangoapi/README.md#getsyncrecord) - Returns data synced with Nango Sync, allowing for advanced filtering, sorting, and pagination options.
* [createSyncTrigger](docs/sdks/nangoapi/README.md#createsynctrigger) - Triggers an additional, one-off execution of specified sync(s) for a given connection or all applicable connections if no connection is specified.
* [createSyncStart](docs/sdks/nangoapi/README.md#createsyncstart) - Starts the continuous execution of specified sync(s) for a given connection or all applicable connections if no connection is specified.
* [createSyncPause](docs/sdks/nangoapi/README.md#createsyncpause) - Pauses the continuous execution of specified sync(s) for a given connection or all applicable connections if no connection is specified.
* [getSyncStatus](docs/sdks/nangoapi/README.md#getsyncstatus) - Get the status of specified sync(s) for a given connection or all applicable connections if no connection is specified.
* [updateConnectionFrequency](docs/sdks/nangoapi/README.md#updateconnectionfrequency) - Override a sync's default frequency for a specific connection or revert to the default frequency.
* [createActionTrigger](docs/sdks/nangoapi/README.md#createactiontrigger) - Triggers an action for a connection.
* [getEnvironmentVariable](docs/sdks/nangoapi/README.md#getenvironmentvariable) - Retrieve the environment variables as added in the Nango dashboard.
* [getProxy](docs/sdks/nangoapi/README.md#getproxy) - Make a GET request with the Proxy.
* [createProxy](docs/sdks/nangoapi/README.md#createproxy) - Make a POST request with the Proxy.
* [putProxy](docs/sdks/nangoapi/README.md#putproxy) - Make a PUT request with the Proxy.
* [patchProxy](docs/sdks/nangoapi/README.md#patchproxy) - Make a PATCH request with the Proxy.
* [deleteProxy](docs/sdks/nangoapi/README.md#deleteproxy) - Make a DELETE request with the Proxy.
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object       | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Response400 | 400                | application/json   |
| errors.SDKError    | 4xx-5xx            | */*                |

Example

```typescript
import { NangoAPI } from "Nango-API";

async function run() {
    const sdk = new NangoAPI();

    let result;
    try {
        result = await sdk.createIntegration({});
    } catch (err) {
        switch (true) {
            case err instanceof errors.Response400: {
                console.error(err); // handle exception
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.nango.dev` | None |
| 1 | `http://localhost:3003` | None |

```typescript
import { NangoAPI } from "Nango-API";

async function run() {
    const sdk = new NangoAPI({
        serverIdx: 1,
    });

    const result = await sdk.listIntegrations();

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { NangoAPI } from "Nango-API";

async function run() {
    const sdk = new NangoAPI({
        serverURL: "https://api.nango.dev",
    });

    const result = await sdk.listIntegrations();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { NangoAPI } from "Nango-API";
import { HTTPClient } from "Nango-API/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000);
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new NangoAPI({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
