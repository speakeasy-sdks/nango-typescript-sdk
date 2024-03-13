/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetConnectionResponseItems = {};

export type GetConnectionResponse = {
    configs: Array<any>;
    items?: GetConnectionResponseItems | undefined;
};

/** @internal */
export namespace GetConnectionResponseItems$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<GetConnectionResponseItems, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetConnectionResponseItems> =
        z.object({});
}

/** @internal */
export namespace GetConnectionResponse$ {
    export type Inbound = {
        configs: Array<any>;
        items?: GetConnectionResponseItems$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetConnectionResponse, z.ZodTypeDef, Inbound> = z
        .object({
            configs: z.array(z.any()),
            items: z.lazy(() => GetConnectionResponseItems$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                configs: v.configs,
                ...(v.items === undefined ? null : { items: v.items }),
            };
        });

    export type Outbound = {
        configs: Array<any>;
        items?: GetConnectionResponseItems$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetConnectionResponse> = z
        .object({
            configs: z.array(z.any()),
            items: z.lazy(() => GetConnectionResponseItems$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                configs: v.configs,
                ...(v.items === undefined ? null : { items: v.items }),
            };
        });
}
