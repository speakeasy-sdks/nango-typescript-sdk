/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UpdateIntegrationRequest = {};

/** @internal */
export namespace UpdateIntegrationRequest$ {
    export const inboundSchema: z.ZodType<UpdateIntegrationRequest, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateIntegrationRequest> =
        z.object({});
}
