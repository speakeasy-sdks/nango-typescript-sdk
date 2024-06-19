# Integrations
(*integrations*)

### Available Operations

* [list](#list) - Returns a list of integrations including their unique keys and providers as configured in the Nango API.
* [create](#create) - Create a new integration including its provider configuration, OAuth details if applicable, and associated integration ID.
* [update](#update) - Edit an integration, specifically tailored for OAuth APIs, updating the provider configuration along with OAuth client ID and secret.
* [get](#get) - Returns details of a specific integration identified by its provider configuration key, optionally including credentials if specified.
* [delete](#delete) - Deletes a specific integration identified by its provider configuration key.

## list

Returns a list of integrations

### Example Usage

```typescript
import { Nango } from "@speakeasy-sdks/nango-ts";

const nango = new Nango({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await nango.integrations.list();

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[components.IntegrationsResponse200](../../models/components/integrationsresponse200.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## create

Create a new integration

### Example Usage

```typescript
import { Nango } from "@speakeasy-sdks/nango-ts";

const nango = new Nango({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await nango.integrations.create({});

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.ListIntegrationsRequest](../../models/components/listintegrationsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[components.IntegrationsResponse200](../../models/components/integrationsresponse200.md)\>**
### Errors

| Error Object       | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Response400 | 400                | application/json   |
| errors.SDKError    | 4xx-5xx            | */*                |

## update

Edit an integration (only for OAuth APIs)

### Example Usage

```typescript
import { Nango } from "@speakeasy-sdks/nango-ts";

const nango = new Nango({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await nango.integrations.update({});

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.UpdateIntegrationRequest](../../models/components/updateintegrationrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[components.IntegrationsResponse200](../../models/components/integrationsresponse200.md)\>**
### Errors

| Error Object       | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Response400 | 400                | application/json   |
| errors.Response404 | 404                | application/json   |
| errors.SDKError    | 4xx-5xx            | */*                |

## get

Returns a specific integration

### Example Usage

```typescript
import { Nango } from "@speakeasy-sdks/nango-ts";

const nango = new Nango({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await nango.integrations.get("<value>", false);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `providerConfigKey`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The integration ID that you created in Nango.                                                                                                                                  |
| `includeCreds`                                                                                                                                                                 | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | If true, the response will contain the client ID, secret, scopes, auth_mode and app link - if applicable. include_creds is false by default.                                   |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[components.GetIntegrationResponse](../../models/components/getintegrationresponse.md)\>**
### Errors

| Error Object       | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Response400 | 400                | application/json   |
| errors.Response404 | 404                | application/json   |
| errors.SDKError    | 4xx-5xx            | */*                |

## delete

Deletes a specific integration

### Example Usage

```typescript
import { Nango } from "@speakeasy-sdks/nango-ts";

const nango = new Nango({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  await nango.integrations.delete("<value>");

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `providerConfigKey`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The integration ID that you created in Nango.                                                                                                                                  |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<void\>**
### Errors

| Error Object       | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Response400 | 400                | application/json   |
| errors.Response404 | 404                | application/json   |
| errors.SDKError    | 4xx-5xx            | */*                |
