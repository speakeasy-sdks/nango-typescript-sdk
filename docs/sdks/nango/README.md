# Nango SDK


## Overview

Nango API: Nango API specs used to authorize & sync data with external APIs.

### Available Operations

* [getEnvironmentVariables](#getenvironmentvariables) - Retrieve the environment variables as added in the Nango dashboard.

## getEnvironmentVariables

Retrieve the environment variables as added in the Nango dashboard

### Example Usage

```typescript
import { Nango } from "@simplesagar92/nango";

const nango = new Nango({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await nango.getEnvironmentVariables();

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

**Promise\<[operations.GetEnvironmentVariableResponse](../../models/operations/getenvironmentvariableresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
