# Nango Typescript SDK

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
import { Nango } from "@nango/sdk";

async function run() {
    const sdk = new Nango();

    const result = await sdk.getEnvironmentVariables();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [Nango SDK](docs/sdks/nango/README.md)

* [getEnvironmentVariables](docs/sdks/nango/README.md#getenvironmentvariables) - Retrieve the environment variables as added in the Nango dashboard.

### [integrations](docs/sdks/integrations/README.md)

* [list](docs/sdks/integrations/README.md#list) - Returns a list of integrations including their unique keys and providers as configured in the Nango API.
* [create](docs/sdks/integrations/README.md#create) - Create a new integration including its provider configuration, OAuth details if applicable, and associated integration ID.
* [update](docs/sdks/integrations/README.md#update) - Edit an integration, specifically tailored for OAuth APIs, updating the provider configuration along with OAuth client ID and secret.
* [fetch](docs/sdks/integrations/README.md#fetch) - Returns details of a specific integration identified by its provider configuration key, optionally including credentials if specified.
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
* [createSyncStart](docs/sdks/sync/README.md#createsyncstart) - Starts the continuous execution of specified sync(s) for a given connection or all applicable connections if no connection is specified.
* [pause](docs/sdks/sync/README.md#pause) - Pauses the continuous execution of specified sync(s) for a given connection or all applicable connections if no connection is specified.
* [status](docs/sdks/sync/README.md#status) - Get the status of specified sync(s) for a given connection or all applicable connections if no connection is specified.
* [updateConnectionFrequency](docs/sdks/sync/README.md#updateconnectionfrequency) - Override a sync's default frequency for a specific connection or revert to the default frequency.

### [action](docs/sdks/action/README.md)

* [createTrigger](docs/sdks/action/README.md#createtrigger) - Triggers an action for a connection.

### [proxy](docs/sdks/proxy/README.md)

* [get](docs/sdks/proxy/README.md#get) - Make a GET request with the Proxy.
* [create](docs/sdks/proxy/README.md#create) - Make a POST request with the Proxy.
* [update](docs/sdks/proxy/README.md#update) - Make a PUT request with the Proxy.
* [patch](docs/sdks/proxy/README.md#patch) - Make a PATCH request with the Proxy.

### [delete](docs/sdks/delete/README.md)

* [deletes](docs/sdks/delete/README.md#deletes) - Make a DELETE request with the Proxy.
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
import { Nango } from "@nango/sdk";

async function run() {
    const sdk = new Nango();

    let result;
    try {
        result = await sdk.integrations.create({});
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

### Select Server by Name

You can override the default server globally by passing a server name to the `server` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the names associated with the available servers:

| Name | Server | Variables |
| ----- | ------ | --------- |
| `prod` | `https://api.nango.dev` | None |
| `local` | `http://localhost:3003` | None |

```typescript
import { Nango } from "@nango/sdk";

async function run() {
    const sdk = new Nango({
        server: "local",
    });

    const result = await sdk.getEnvironmentVariables();

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Nango } from "@nango/sdk";

async function run() {
    const sdk = new Nango({
        serverURL: "https://api.nango.dev",
    });

    const result = await sdk.getEnvironmentVariables();

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
import { Nango } from "@nango/sdk";
import { HTTPClient } from "@nango/sdk/lib/http";

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
