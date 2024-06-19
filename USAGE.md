<!-- Start SDK Example Usage [usage] -->
```typescript
import { Nango } from "@speakeasy-sdks/nango-ts";

const nango = new Nango({
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await nango.integrations.list();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->