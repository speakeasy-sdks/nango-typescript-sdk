/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type GetConnectionsRequest = {
    /**
     * The connection ID used to create the connection.
     */
    connectionId: string;
    /**
     * The integration ID used to create the connection (aka Unique Key).
     */
    providerConfigKey: string;
    /**
     * If true, Nango will attempt to refresh the access access token regardless of its expiration status (false by default).
     */
    forceRefresh?: boolean | undefined;
    /**
     * If true, return the refresh token as part of the response (false by default).
     */
    refreshToken?: boolean | undefined;
};

export type GetConnectionsResponse = {
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
export namespace GetConnectionsRequest$ {
    export type Inbound = {
        connectionId: string;
        provider_config_key: string;
        force_refresh?: boolean | undefined;
        refresh_token?: boolean | undefined;
    };

    export const inboundSchema: z.ZodType<GetConnectionsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            connectionId: z.string(),
            provider_config_key: z.string(),
            force_refresh: z.boolean().optional(),
            refresh_token: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                connectionId: v.connectionId,
                providerConfigKey: v.provider_config_key,
                ...(v.force_refresh === undefined ? null : { forceRefresh: v.force_refresh }),
                ...(v.refresh_token === undefined ? null : { refreshToken: v.refresh_token }),
            };
        });

    export type Outbound = {
        connectionId: string;
        provider_config_key: string;
        force_refresh?: boolean | undefined;
        refresh_token?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetConnectionsRequest> = z
        .object({
            connectionId: z.string(),
            providerConfigKey: z.string(),
            forceRefresh: z.boolean().optional(),
            refreshToken: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                connectionId: v.connectionId,
                provider_config_key: v.providerConfigKey,
                ...(v.forceRefresh === undefined ? null : { force_refresh: v.forceRefresh }),
                ...(v.refreshToken === undefined ? null : { refresh_token: v.refreshToken }),
            };
        });
}

/** @internal */
export namespace GetConnectionsResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetConnectionsResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetConnectionsResponse> = z
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