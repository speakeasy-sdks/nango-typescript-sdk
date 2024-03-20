/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

/**
 * Set how the records are sorted. The default is id. The options are 'created_at', 'updated_at', 'id'.
 */
export enum SortBy {
    CreatedAt = "created_at",
    UpdatedAt = "updated_at",
    Id = "id",
}

/**
 * Set the order of results. The default is 'desc'. The options are 'desc' or 'asc'.
 */
export enum Order {
    Desc = "desc",
    Asc = "asc",
}

/**
 * Filter to only show results that have been added or updated or deleted. Helpful when used in conjuction with the delta parameter to retrieve a subset or records that were added, updated, or deleted with the latest sync.
 */
export enum QueryParamFilter {
    Added = "added",
    Updated = "updated",
    Deleted = "deleted",
}

export type GetSyncRecordRequest = {
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
     * The number of records to skip. If not passed, no records are skipped.
     */
    offset?: number | undefined;
    /**
     * Set how the records are sorted. The default is id. The options are 'created_at', 'updated_at', 'id'.
     */
    sortBy?: SortBy | undefined;
    /**
     * Set the order of results. The default is 'desc'. The options are 'desc' or 'asc'.
     */
    order?: Order | undefined;
    /**
     * Filter to only show results that have been added or updated or deleted. Helpful when used in conjuction with the delta parameter to retrieve a subset or records that were added, updated, or deleted with the latest sync.
     */
    filter?: QueryParamFilter | undefined;
    /**
     * The connection ID used to create the connection.
     */
    connectionId: string;
    /**
     * The integration ID used to create the connection (aka Unique Key).
     */
    providerConfigKey: string;
};

export type GetSyncRecordResponse = {
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
    getSyncRecordResponse?: Array<components.GetSyncRecordResponse> | undefined;
};

/** @internal */
export const SortBy$ = z.nativeEnum(SortBy);

/** @internal */
export const Order$ = z.nativeEnum(Order);

/** @internal */
export const QueryParamFilter$ = z.nativeEnum(QueryParamFilter);

/** @internal */
export namespace GetSyncRecordRequest$ {
    export type Inbound = {
        model: string;
        delta?: string | undefined;
        limit?: number | undefined;
        offset?: number | undefined;
        sort_by?: SortBy | undefined;
        order?: Order | undefined;
        filter?: QueryParamFilter | undefined;
        "Connection-Id": string;
        "Provider-Config-Key": string;
    };

    export const inboundSchema: z.ZodType<GetSyncRecordRequest, z.ZodTypeDef, Inbound> = z
        .object({
            model: z.string(),
            delta: z.string().optional(),
            limit: z.number().int().optional(),
            offset: z.number().int().optional(),
            sort_by: SortBy$.optional(),
            order: Order$.optional(),
            filter: QueryParamFilter$.optional(),
            "Connection-Id": z.string(),
            "Provider-Config-Key": z.string(),
        })
        .transform((v) => {
            return {
                model: v.model,
                ...(v.delta === undefined ? null : { delta: v.delta }),
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.offset === undefined ? null : { offset: v.offset }),
                ...(v.sort_by === undefined ? null : { sortBy: v.sort_by }),
                ...(v.order === undefined ? null : { order: v.order }),
                ...(v.filter === undefined ? null : { filter: v.filter }),
                connectionId: v["Connection-Id"],
                providerConfigKey: v["Provider-Config-Key"],
            };
        });

    export type Outbound = {
        model: string;
        delta?: string | undefined;
        limit?: number | undefined;
        offset?: number | undefined;
        sort_by?: SortBy | undefined;
        order?: Order | undefined;
        filter?: QueryParamFilter | undefined;
        "Connection-Id": string;
        "Provider-Config-Key": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSyncRecordRequest> = z
        .object({
            model: z.string(),
            delta: z.string().optional(),
            limit: z.number().int().optional(),
            offset: z.number().int().optional(),
            sortBy: SortBy$.optional(),
            order: Order$.optional(),
            filter: QueryParamFilter$.optional(),
            connectionId: z.string(),
            providerConfigKey: z.string(),
        })
        .transform((v) => {
            return {
                model: v.model,
                ...(v.delta === undefined ? null : { delta: v.delta }),
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.offset === undefined ? null : { offset: v.offset }),
                ...(v.sortBy === undefined ? null : { sort_by: v.sortBy }),
                ...(v.order === undefined ? null : { order: v.order }),
                ...(v.filter === undefined ? null : { filter: v.filter }),
                "Connection-Id": v.connectionId,
                "Provider-Config-Key": v.providerConfigKey,
            };
        });
}

/** @internal */
export namespace GetSyncRecordResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        GetSyncRecordResponse?: Array<components.GetSyncRecordResponse$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<GetSyncRecordResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            GetSyncRecordResponse: z
                .array(components.GetSyncRecordResponse$.inboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.GetSyncRecordResponse === undefined
                    ? null
                    : { getSyncRecordResponse: v.GetSyncRecordResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        GetSyncRecordResponse?: Array<components.GetSyncRecordResponse$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSyncRecordResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            getSyncRecordResponse: z
                .array(components.GetSyncRecordResponse$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.getSyncRecordResponse === undefined
                    ? null
                    : { GetSyncRecordResponse: v.getSyncRecordResponse }),
            };
        });
}
