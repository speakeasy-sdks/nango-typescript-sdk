# Actions
(*actions*)

### Available Operations

* [createTrigger](#createtrigger) - Triggers an action for a connection.

## createTrigger

Triggers an action for a connection

### Example Usage

```typescript
import { Nango } from "@speakeasy-sdks/nango";

const nango = new Nango();

async function run() {
  const result = await nango.actions.createTrigger("<value>", "<value>", {
    actionName: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `connectionId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The connection ID used to create the connection.                                                                                                                               |
| `providerConfigKey`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The integration ID used to create the connection (aka Unique Key).                                                                                                             |
| `createActionTriggerRequest`                                                                                                                                                   | [components.CreateActionTriggerRequest](../../models/components/createactiontriggerrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[components.CreateActionTriggerResponse](../../models/components/createactiontriggerresponse.md)\>**
### Errors

| Error Object       | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Response400 | 400                | application/json   |
| errors.SDKError    | 4xx-5xx            | */*                |
