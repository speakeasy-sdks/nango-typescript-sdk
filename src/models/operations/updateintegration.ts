/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type UpdateIntegrationResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Successfully edit an integration
     */
    integrationsResponse200?: components.IntegrationsResponse200 | undefined;
};

/** @internal */
export namespace UpdateIntegrationResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        IntegrationsResponse200?: components.IntegrationsResponse200$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateIntegrationResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            IntegrationsResponse200: components.IntegrationsResponse200$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.IntegrationsResponse200 === undefined
                    ? null
                    : { integrationsResponse200: v.IntegrationsResponse200 }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        IntegrationsResponse200?: components.IntegrationsResponse200$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateIntegrationResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            integrationsResponse200: components.IntegrationsResponse200$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.integrationsResponse200 === undefined
                    ? null
                    : { IntegrationsResponse200: v.integrationsResponse200 }),
            };
        });
}
