<div align="center">
        <img src="https://github.com/speakeasy-sdks/nango-typescript-sdk/assets/68016351/b99dc311-cff9-4e96-aa0d-452ac79723e6" width="250">
   <p></p>
   <a href="https://docs.nango.dev/introduction"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=000000&style=for-the-badge" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" /></a>
</div>
<br></br>

The Nango Typescript library provides convenient access to the Nango REST API from any Typescript or Javascript application. The library includes type definitions for all request params and response fields, and makes HTTP requests using the [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) client. Runs on all mainstream JS runtimes.

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add @simplesagar92/nango
```

### Yarn

```bash
yarn add @simplesagar92/nango
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
import { Nango } from "@simplesagar92/nango";

const nango = new Nango();

async function run() {
    const result = await nango.integrations.list();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [integrations](docs/sdks/integrations/README.md)

* [list](docs/sdks/integrations/README.md#list) - Returns a list of integrations including their unique keys and providers as configured in the Nango API.
* [create](docs/sdks/integrations/README.md#create) - Create a new integration including its provider configuration, OAuth details if applicable, and associated integration ID.
* [update](docs/sdks/integrations/README.md#update) - Edit an integration, specifically tailored for OAuth APIs, updating the provider configuration along with OAuth client ID and secret.
* [get](docs/sdks/integrations/README.md#get) - Returns details of a specific integration identified by its provider configuration key, optionally including credentials if specified.
* [delete](docs/sdks/integrations/README.md#delete) - Deletes a specific integration identified by its provider configuration key.

### [connections](docs/sdks/connections/README.md)

* [list](docs/sdks/connections/README.md#list) - Returns a list of connections, optionally filtered by connection ID.
* [create](docs/sdks/connections/README.md#create) - Adds a connection using an existing access token, along with optional OAuth or basic authentication credentials, and additional metadata or configuration.
* [get](docs/sdks/connections/README.md#get) - Returns details of a specific connection identified by its connection ID, associated with the specified integration, with optional parameters for force refresh and returning the refresh token.
* [delete](docs/sdks/connections/README.md#delete) - Deletes a specific connection identified by its connection ID, associated with the specified integration.
* [createMetadata](docs/sdks/connections/README.md#createmetadata) - Set custom metadata for the specified connection.
* [update](docs/sdks/connections/README.md#update) - Update custom metadata for the specified connection.

### [records](docs/sdks/records/README.md)

* [get](docs/sdks/records/README.md#get) - Returns data synced with Nango Sync, filtered by specified parameters.

### [sync](docs/sdks/sync/README.md)

* [getRecord](docs/sdks/sync/README.md#getrecord) - Returns data synced with Nango Sync, allowing for advanced filtering, sorting, and pagination options.
* [createTrigger](docs/sdks/sync/README.md#createtrigger) - Triggers an additional, one-off execution of specified sync(s) for a given connection or all applicable connections if no connection is specified.
* [start](docs/sdks/sync/README.md#start) - Starts the continuous execution of specified sync(s) for a given connection or all applicable connections if no connection is specified.
* [pause](docs/sdks/sync/README.md#pause) - Pauses the continuous execution of specified sync(s) for a given connection or all applicable connections if no connection is specified.
* [getStatus](docs/sdks/sync/README.md#getstatus) - Get the status of specified sync(s) for a given connection or all applicable connections if no connection is specified.
* [updateFrequency](docs/sdks/sync/README.md#updatefrequency) - Override a sync's default frequency for a specific connection or revert to the default frequency.

### [actions](docs/sdks/actions/README.md)

* [createTrigger](docs/sdks/actions/README.md#createtrigger) - Triggers an action for a connection.

### [environment](docs/sdks/environment/README.md)

* [get](docs/sdks/environment/README.md#get) - Retrieve the environment variables as added in the Nango dashboard.

### [proxy](docs/sdks/proxy/README.md)

* [get](docs/sdks/proxy/README.md#get) - Make a GET request with the Proxy.
* [create](docs/sdks/proxy/README.md#create) - Make a POST request with the Proxy.
* [update](docs/sdks/proxy/README.md#update) - Make a PUT request with the Proxy.
* [modify](docs/sdks/proxy/README.md#modify) - Make a PATCH request with the Proxy.
* [delete](docs/sdks/proxy/README.md#delete) - Make a DELETE request with the Proxy.
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object       | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Response400 | 400                | application/json   |
| errors.SDKError    | 4xx-5xx            | */*                |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { Nango } from "@simplesagar92/nango";
import * as errors from "@simplesagar92/nango/models/errors";

const nango = new Nango();

async function run() {
    let result;
    try {
        result = await nango.integrations.create({});
    } catch (err) {
        switch (true) {
            case err instanceof errors.SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
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

### Select Server by Name

You can override the default server globally by passing a server name to the `server` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the names associated with the available servers:

| Name | Server | Variables |
| ----- | ------ | --------- |
| `prod` | `https://api.nango.dev` | None |
| `local` | `http://localhost:3003` | None |

```typescript
import { Nango } from "@simplesagar92/nango";

const nango = new Nango({
    server: "local",
});

async function run() {
    const result = await nango.integrations.list();

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Nango } from "@simplesagar92/nango";

const nango = new Nango({
    serverURL: "https://api.nango.dev",
});

async function run() {
    const result = await nango.integrations.list();

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
import { Nango } from "@simplesagar92/nango";
import { HTTPClient } from "@simplesagar92/nango/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
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

const sdk = new Nango({ httpClient });
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
