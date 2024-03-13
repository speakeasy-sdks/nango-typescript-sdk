/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import * as z from "zod";

export type GetSyncStatusRequest = {
    /**
     * The ID of the integration you established within Nango
     */
    providerConfigKey: string;
    /**
     * The name of the syncs you want to fetch a status for. Pass in "*" to return all syncs per the integration
     */
    syncs: string;
    /**
     * The ID of the connection. If omitted, all connections will be surfaced.
     */
    connectionId?: string | undefined;
};

export type GetSyncStatusResponse = {
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
     * Successfully returned a list of syncs and their status
     */
    getSyncStatusResponse?: components.GetSyncStatusResponse | undefined;
};

/** @internal */
export namespace GetSyncStatusRequest$ {
    export type Inbound = {
        provider_config_key: string;
        syncs: string;
        connection_id?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetSyncStatusRequest, z.ZodTypeDef, Inbound> = z
        .object({
            provider_config_key: z.string(),
            syncs: z.string(),
            connection_id: z.string().optional(),
        })
        .transform((v) => {
            return {
                providerConfigKey: v.provider_config_key,
                syncs: v.syncs,
                ...(v.connection_id === undefined ? null : { connectionId: v.connection_id }),
            };
        });

    export type Outbound = {
        provider_config_key: string;
        syncs: string;
        connection_id?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSyncStatusRequest> = z
        .object({
            providerConfigKey: z.string(),
            syncs: z.string(),
            connectionId: z.string().optional(),
        })
        .transform((v) => {
            return {
                provider_config_key: v.providerConfigKey,
                syncs: v.syncs,
                ...(v.connectionId === undefined ? null : { connection_id: v.connectionId }),
            };
        });
}

/** @internal */
export namespace GetSyncStatusResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        GetSyncStatusResponse?: components.GetSyncStatusResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetSyncStatusResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            GetSyncStatusResponse: components.GetSyncStatusResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.GetSyncStatusResponse === undefined
                    ? null
                    : { getSyncStatusResponse: v.GetSyncStatusResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        GetSyncStatusResponse?: components.GetSyncStatusResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSyncStatusResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            getSyncStatusResponse: components.GetSyncStatusResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.getSyncStatusResponse === undefined
                    ? null
                    : { GetSyncStatusResponse: v.getSyncStatusResponse }),
            };
        });
}
