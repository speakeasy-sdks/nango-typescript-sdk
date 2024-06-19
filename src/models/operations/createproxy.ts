/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type CreateProxyRequest = {
    anyPath: string;
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
    createProxyRequest?: components.CreateProxyRequest | undefined;
};

/** @internal */
export namespace CreateProxyRequest$ {
    export const inboundSchema: z.ZodType<CreateProxyRequest, z.ZodTypeDef, unknown> = z
        .object({
            anyPath: z.string(),
            "Connection-Id": z.string(),
            "Provider-Config-Key": z.string(),
            Retries: z.string().optional(),
            "Base-Url-Override": z.string().optional(),
            Decompress: z.string().optional(),
            "nango-proxy-$ANY_HEADER": z.string().optional(),
            CreateProxyRequest: components.CreateProxyRequest$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                "Connection-Id": "connectionId",
                "Provider-Config-Key": "providerConfigKey",
                Retries: "retries",
                "Base-Url-Override": "baseUrlOverride",
                Decompress: "decompress",
                "nango-proxy-$ANY_HEADER": "nangoProxyDollarANYHEADER",
                CreateProxyRequest: "createProxyRequest",
            });
        });

    export type Outbound = {
        anyPath: string;
        "Connection-Id": string;
        "Provider-Config-Key": string;
        Retries?: string | undefined;
        "Base-Url-Override"?: string | undefined;
        Decompress?: string | undefined;
        "nango-proxy-$ANY_HEADER"?: string | undefined;
        CreateProxyRequest?: components.CreateProxyRequest$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateProxyRequest> = z
        .object({
            anyPath: z.string(),
            connectionId: z.string(),
            providerConfigKey: z.string(),
            retries: z.string().optional(),
            baseUrlOverride: z.string().optional(),
            decompress: z.string().optional(),
            nangoProxyDollarANYHEADER: z.string().optional(),
            createProxyRequest: components.CreateProxyRequest$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                connectionId: "Connection-Id",
                providerConfigKey: "Provider-Config-Key",
                retries: "Retries",
                baseUrlOverride: "Base-Url-Override",
                decompress: "Decompress",
                nangoProxyDollarANYHEADER: "nango-proxy-$ANY_HEADER",
                createProxyRequest: "CreateProxyRequest",
            });
        });
}
