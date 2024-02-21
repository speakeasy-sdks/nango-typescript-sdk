/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type UpdateConnectionFrequencyResponse = {
    /**
     * The updated frequency value
     */
    frequency?: string | undefined;
};

/** @internal */
export namespace UpdateConnectionFrequencyResponse$ {
    export type Inbound = {
        frequency?: string | undefined;
    };

    export const inboundSchema: z.ZodType<
        UpdateConnectionFrequencyResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            frequency: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.frequency === undefined ? null : { frequency: v.frequency }),
            };
        });

    export type Outbound = {
        frequency?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UpdateConnectionFrequencyResponse
    > = z
        .object({
            frequency: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.frequency === undefined ? null : { frequency: v.frequency }),
            };
        });
}