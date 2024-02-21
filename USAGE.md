<!-- Start SDK Example Usage [usage] -->
```typescript
import { Nango } from "@simplesagar92/nango";

async function run() {
    const sdk = new Nango();

    const result = await sdk.getEnvironmentVariables();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->