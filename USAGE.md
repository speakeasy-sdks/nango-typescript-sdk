<!-- Start SDK Example Usage [usage] -->
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