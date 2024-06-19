# Sync
(*sync*)

### Available Operations

* [getRecord](#getrecord) - Returns data synced with Nango Sync, allowing for advanced filtering, sorting, and pagination options.
* [createTrigger](#createtrigger) - Triggers an additional, one-off execution of specified sync(s) for a given connection or all applicable connections if no connection is specified.
* [start](#start) - Starts the continuous execution of specified sync(s) for a given connection or all applicable connections if no connection is specified.
* [pause](#pause) - Pauses the continuous execution of specified sync(s) for a given connection or all applicable connections if no connection is specified.
* [getStatus](#getstatus) - Get the status of specified sync(s) for a given connection or all applicable connections if no connection is specified.
* [updateFrequency](#updatefrequency) - Override a sync's default frequency for a specific connection or revert to the default frequency.

## getRecord

Returns data synced with Nango Sync

### Example Usage

```typescript
import { Nango } from "@simplesagar92/nango";

const nango = new Nango();

async function run() {
  const result = await nango.sync.getRecord({
    model: "Expedition",
    connectionId: "<value>",
    providerConfigKey: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSyncRecordRequest](../../models/operations/getsyncrecordrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.GetSyncRecordResponse](../../models/operations/getsyncrecordresponse.md)\>**
### Errors

| Error Object       | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Response400 | 400                | application/json   |
| errors.SDKError    | 4xx-5xx            | */*                |

## createTrigger

Triggers an additional, one-off execution of specified sync(s) (for a given connection or all applicable connections if no connection is specified).

### Example Usage

```typescript
import { Nango } from "@simplesagar92/nango";

const nango = new Nango();

async function run() {
  const result = await nango.sync.createTrigger({
    providerConfigKey: "<value>",
    syncs: [
      "<value>",
    ],
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CreateSyncTriggerRequest](../../models/components/createsynctriggerrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.CreateSyncTriggerResponse](../../models/operations/createsynctriggerresponse.md)\>**
### Errors

| Error Object       | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Response400 | 400                | application/json   |
| errors.SDKError    | 4xx-5xx            | */*                |

## start

Starts the continuous execution of specified sync(s) (for a given connection or all applicable connections if no connection is specified).

### Example Usage

```typescript
import { Nango } from "@simplesagar92/nango";

const nango = new Nango();

async function run() {
  const result = await nango.sync.start({
    providerConfigKey: "<value>",
    syncs: [
      "<value>",
    ],
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CreateSyncStartRequest](../../models/components/createsyncstartrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.CreateSyncStartResponse](../../models/operations/createsyncstartresponse.md)\>**
### Errors

| Error Object       | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Response400 | 400                | application/json   |
| errors.SDKError    | 4xx-5xx            | */*                |

## pause

Pauses the continuous execution of specified sync(s) (for a given connection or all applicable connections if no connection is specified).

### Example Usage

```typescript
import { Nango } from "@simplesagar92/nango";

const nango = new Nango();

async function run() {
  const result = await nango.sync.pause({
    providerConfigKey: "<value>",
    syncs: [
      "<value>",
    ],
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CreateSyncPauseRequest](../../models/components/createsyncpauserequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.CreateSyncPauseResponse](../../models/operations/createsyncpauseresponse.md)\>**
### Errors

| Error Object       | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Response400 | 400                | application/json   |
| errors.SDKError    | 4xx-5xx            | */*                |

## getStatus

Get the status of specified sync(s) (for a given connection or all applicable connections if no connection is specified)

### Example Usage

```typescript
import { Nango } from "@simplesagar92/nango";

const nango = new Nango();

async function run() {
  const result = await nango.sync.getStatus("<value>", "<value>", "<value>");

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `providerConfigKey`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the integration you established within Nango                                                                                                                         |
| `syncs`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The name of the syncs you want to fetch a status for. Pass in "*" to return all syncs per the integration                                                                      |
| `connectionId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The ID of the connection. If omitted, all connections will be surfaced.                                                                                                        |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.GetSyncStatusResponse](../../models/operations/getsyncstatusresponse.md)\>**
### Errors

| Error Object       | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Response400 | 400                | application/json   |
| errors.SDKError    | 4xx-5xx            | */*                |

## updateFrequency

Override a sync's default frequency for a specific connection, or revert to the default frequency.

### Example Usage

```typescript
import { Nango } from "@simplesagar92/nango";

const nango = new Nango();

async function run() {
  const result = await nango.sync.updateFrequency({
    providerConfigKey: "<value>",
    connectionId: "<value>",
    syncName: "<value>",
    frequency: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.UpdateConnectionFrequencyRequest](../../models/components/updateconnectionfrequencyrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.UpdateConnectionFrequencyResponse](../../models/operations/updateconnectionfrequencyresponse.md)\>**
### Errors

| Error Object       | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Response400 | 400                | application/json   |
| errors.SDKError    | 4xx-5xx            | */*                |
