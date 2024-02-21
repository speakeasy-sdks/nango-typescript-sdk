<!-- Start SDK Example Usage [usage] -->
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