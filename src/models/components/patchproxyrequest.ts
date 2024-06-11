/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as z from "zod";

export type PatchProxyRequest = {
    dollarANYBODYPARAMS?: string | undefined;
};

/** @internal */
export namespace PatchProxyRequest$ {
    export const inboundSchema: z.ZodType<PatchProxyRequest, z.ZodTypeDef, unknown> = z
        .object({
            $ANY_BODY_PARAMS: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                $ANY_BODY_PARAMS: "dollarANYBODYPARAMS",
            });
        });

    export type Outbound = {
        $ANY_BODY_PARAMS?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PatchProxyRequest> = z
        .object({
            dollarANYBODYPARAMS: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                dollarANYBODYPARAMS: "$ANY_BODY_PARAMS",
            });
        });
}
