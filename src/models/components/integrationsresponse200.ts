/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Items = {};

export type IntegrationsResponse200 = {
    configs: Array<any>;
    items?: Items | undefined;
};

/** @internal */
export namespace Items$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<Items, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Items> = z.object({});
}

/** @internal */
export namespace IntegrationsResponse200$ {
    export type Inbound = {
        configs: Array<any>;
        items?: Items$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<IntegrationsResponse200, z.ZodTypeDef, Inbound> = z
        .object({
            configs: z.array(z.any()),
            items: z.lazy(() => Items$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                configs: v.configs,
                ...(v.items === undefined ? null : { items: v.items }),
            };
        });

    export type Outbound = {
        configs: Array<any>;
        items?: Items$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, IntegrationsResponse200> = z
        .object({
            configs: z.array(z.any()),
            items: z.lazy(() => Items$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                configs: v.configs,
                ...(v.items === undefined ? null : { items: v.items }),
            };
        });
}
