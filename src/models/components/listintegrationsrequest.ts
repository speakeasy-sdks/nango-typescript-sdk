/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ListIntegrationsRequest = {};

/** @internal */
export namespace ListIntegrationsRequest$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<ListIntegrationsRequest, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListIntegrationsRequest> =
        z.object({});
}
