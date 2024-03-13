/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import * as z from "zod";

/**
 * Filter to only show results that have been added or updated or deleted. Helpful when used in conjuction with the delta parameter to retrieve a subset or records that were added, updated, or deleted with the latest sync.
 */
export enum Filter {
    Added = "added",
    Updated = "updated",
    Deleted = "deleted",
}

export type GetRecordRequest = {
    /**
     * The data model to fetch
     */
    model: string;
    /**
     * Timestamp, e.g. 2023-05-31T11:46:13.390Z. If passed only records added or updated after this timestamp are returned, otherwise all records are returned.
     */
    delta?: string | undefined;
    /**
     * The maximum number of records to return. If not passed, all records are returned.
     */
    limit?: number | undefined;
    /**
     * Base 64 encoded value that can be used to fetch the next page of results. The cursor will be included until there are no more results to paginate through.
     *
     * @remarks
     *
     */
    cursor?: string | undefined;
    /**
     * Filter to only show results that have been added or updated or deleted. Helpful when used in conjuction with the delta parameter to retrieve a subset or records that were added, updated, or deleted with the latest sync.
     */
    filter?: Filter | undefined;
    /**
     * The connection ID used to create the connection.
     */
    connectionId: string;
    /**
     * The integration ID used to create the connection (aka Unique Key).
     */
    providerConfigKey: string;
};

export type GetRecordResponse = {
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
     * Successfully returned records
     */
    getRecordResponse?: components.GetRecordResponse | undefined;
};

/** @internal */
export const Filter$ = z.nativeEnum(Filter);

/** @internal */
export namespace GetRecordRequest$ {
    export type Inbound = {
        model: string;
        delta?: string | undefined;
        limit?: number | undefined;
        cursor?: string | undefined;
        filter?: Filter | undefined;
        "Connection-Id": string;
        "Provider-Config-Key": string;
    };

    export const inboundSchema: z.ZodType<GetRecordRequest, z.ZodTypeDef, Inbound> = z
        .object({
            model: z.string(),
            delta: z.string().optional(),
            limit: z.number().int().optional(),
            cursor: z.string().optional(),
            filter: Filter$.optional(),
            "Connection-Id": z.string(),
            "Provider-Config-Key": z.string(),
        })
        .transform((v) => {
            return {
                model: v.model,
                ...(v.delta === undefined ? null : { delta: v.delta }),
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
                ...(v.filter === undefined ? null : { filter: v.filter }),
                connectionId: v["Connection-Id"],
                providerConfigKey: v["Provider-Config-Key"],
            };
        });

    export type Outbound = {
        model: string;
        delta?: string | undefined;
        limit?: number | undefined;
        cursor?: string | undefined;
        filter?: Filter | undefined;
        "Connection-Id": string;
        "Provider-Config-Key": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetRecordRequest> = z
        .object({
            model: z.string(),
            delta: z.string().optional(),
            limit: z.number().int().optional(),
            cursor: z.string().optional(),
            filter: Filter$.optional(),
            connectionId: z.string(),
            providerConfigKey: z.string(),
        })
        .transform((v) => {
            return {
                model: v.model,
                ...(v.delta === undefined ? null : { delta: v.delta }),
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
                ...(v.filter === undefined ? null : { filter: v.filter }),
                "Connection-Id": v.connectionId,
                "Provider-Config-Key": v.providerConfigKey,
            };
        });
}

/** @internal */
export namespace GetRecordResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        GetRecordResponse?: components.GetRecordResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetRecordResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            GetRecordResponse: components.GetRecordResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.GetRecordResponse === undefined
                    ? null
                    : { getRecordResponse: v.GetRecordResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        GetRecordResponse?: components.GetRecordResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetRecordResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            getRecordResponse: components.GetRecordResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.getRecordResponse === undefined
                    ? null
                    : { GetRecordResponse: v.getRecordResponse }),
            };
        });
}
