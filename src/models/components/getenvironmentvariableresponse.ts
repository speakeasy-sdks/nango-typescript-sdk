/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetEnvironmentVariableResponse = {
    /**
     * The name of the environment variable
     */
    name?: string | undefined;
    /**
     * The value of the environment variable
     */
    value?: string | undefined;
};

/** @internal */
export namespace GetEnvironmentVariableResponse$ {
    export const inboundSchema: z.ZodType<GetEnvironmentVariableResponse, z.ZodTypeDef, unknown> =
        z.object({
            name: z.string().optional(),
            value: z.string().optional(),
        });

    export type Outbound = {
        name?: string | undefined;
        value?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetEnvironmentVariableResponse> =
        z.object({
            name: z.string().optional(),
            value: z.string().optional(),
        });
}
