/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Config = {};

export type GetIntegrationResponse = {
    config: Config;
    properties?: any | undefined;
};

/** @internal */
export namespace Config$ {
    export const inboundSchema: z.ZodType<Config, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Config> = z.object({});
}

/** @internal */
export namespace GetIntegrationResponse$ {
    export const inboundSchema: z.ZodType<GetIntegrationResponse, z.ZodTypeDef, unknown> = z.object(
        {
            config: z.lazy(() => Config$.inboundSchema),
            properties: z.any().optional(),
        }
    );

    export type Outbound = {
        config: Config$.Outbound;
        properties?: any | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetIntegrationResponse> =
        z.object({
            config: z.lazy(() => Config$.outboundSchema),
            properties: z.any().optional(),
        });
}
