/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * Invalid request
 */
export type Response400Data = {
    message?: string | undefined;
};

/**
 * Invalid request
 */
export class Response400 extends Error {
    /** The original data that was passed to this error instance. */
    data$: Response400Data;

    constructor(err: Response400Data) {
        super("");
        this.data$ = err;

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "Response400";
    }
}

/** @internal */
export namespace Response400$ {
    export type Inbound = {
        message?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Response400, z.ZodTypeDef, Inbound> = z
        .object({
            message: z.string().optional(),
        })
        .transform((v) => {
            return new Response400({
                ...(v.message === undefined ? null : { message: v.message }),
            });
        });
    export type Outbound = {
        message?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Response400> = z
        .instanceof(Response400)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    message: z.string().optional(),
                })
                .transform((v) => {
                    return {
                        ...(v.message === undefined ? null : { message: v.message }),
                    };
                })
        );
}
