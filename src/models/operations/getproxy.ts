/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetProxyRequest = {
    anyPath: string;
    dollarANYQUERYPARAMS: string;
    /**
     * The connection ID used to create the connection.
     */
    connectionId: string;
    /**
     * The integration ID used to create the connection (aka Unique Key).
     */
    providerConfigKey: string;
    /**
     * The number of retries in case of failure (with exponential back-off). Optional, default 0.
     */
    retries?: string | undefined;
    /**
     * Provide an API base URL when the base API is not listed in the providers.yaml or it needs to be overridden. Optional
     */
    baseUrlOverride?: string | undefined;
    /**
     * Override the decompress option when making requests. Optional, defaults to false
     */
    decompress?: string | undefined;
    /**
     * Any other headers you send are passed on to the external API
     */
    nangoProxyDollarANYHEADER?: string | undefined;
};

export type GetProxyResponse = {
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
};

/** @internal */
export namespace GetProxyRequest$ {
    export type Inbound = {
        anyPath: string;
        $ANY_QUERY_PARAMS: string;
        "Connection-Id": string;
        "Provider-Config-Key": string;
        Retries?: string | undefined;
        "Base-Url-Override"?: string | undefined;
        Decompress?: string | undefined;
        "nango-proxy-$ANY_HEADER"?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetProxyRequest, z.ZodTypeDef, Inbound> = z
        .object({
            anyPath: z.string(),
            $ANY_QUERY_PARAMS: z.string(),
            "Connection-Id": z.string(),
            "Provider-Config-Key": z.string(),
            Retries: z.string().optional(),
            "Base-Url-Override": z.string().optional(),
            Decompress: z.string().optional(),
            "nango-proxy-$ANY_HEADER": z.string().optional(),
        })
        .transform((v) => {
            return {
                anyPath: v.anyPath,
                dollarANYQUERYPARAMS: v.$ANY_QUERY_PARAMS,
                connectionId: v["Connection-Id"],
                providerConfigKey: v["Provider-Config-Key"],
                ...(v.Retries === undefined ? null : { retries: v.Retries }),
                ...(v["Base-Url-Override"] === undefined
                    ? null
                    : { baseUrlOverride: v["Base-Url-Override"] }),
                ...(v.Decompress === undefined ? null : { decompress: v.Decompress }),
                ...(v["nango-proxy-$ANY_HEADER"] === undefined
                    ? null
                    : { nangoProxyDollarANYHEADER: v["nango-proxy-$ANY_HEADER"] }),
            };
        });

    export type Outbound = {
        anyPath: string;
        $ANY_QUERY_PARAMS: string;
        "Connection-Id": string;
        "Provider-Config-Key": string;
        Retries?: string | undefined;
        "Base-Url-Override"?: string | undefined;
        Decompress?: string | undefined;
        "nango-proxy-$ANY_HEADER"?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetProxyRequest> = z
        .object({
            anyPath: z.string(),
            dollarANYQUERYPARAMS: z.string(),
            connectionId: z.string(),
            providerConfigKey: z.string(),
            retries: z.string().optional(),
            baseUrlOverride: z.string().optional(),
            decompress: z.string().optional(),
            nangoProxyDollarANYHEADER: z.string().optional(),
        })
        .transform((v) => {
            return {
                anyPath: v.anyPath,
                $ANY_QUERY_PARAMS: v.dollarANYQUERYPARAMS,
                "Connection-Id": v.connectionId,
                "Provider-Config-Key": v.providerConfigKey,
                ...(v.retries === undefined ? null : { Retries: v.retries }),
                ...(v.baseUrlOverride === undefined
                    ? null
                    : { "Base-Url-Override": v.baseUrlOverride }),
                ...(v.decompress === undefined ? null : { Decompress: v.decompress }),
                ...(v.nangoProxyDollarANYHEADER === undefined
                    ? null
                    : { "nango-proxy-$ANY_HEADER": v.nangoProxyDollarANYHEADER }),
            };
        });
}

/** @internal */
export namespace GetProxyResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetProxyResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetProxyResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
