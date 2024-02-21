/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type CreateSyncStartRequest = {
    /**
     * The ID of the integration that you established within Nango.
     */
    providerConfigKey: string;
    /**
     * The ID of the connection. If omitted, the syncs will be started for all relevant connections.
     */
    connectionId?: string | undefined;
    /**
     * A list of sync names that you wish to start.
     */
    syncs: Array<string>;
};

/** @internal */
export namespace CreateSyncStartRequest$ {
    export type Inbound = {
        provider_config_key: string;
        connection_id?: string | undefined;
        syncs: Array<string>;
    };

    export const inboundSchema: z.ZodType<CreateSyncStartRequest, z.ZodTypeDef, Inbound> = z
        .object({
            provider_config_key: z.string(),
            connection_id: z.string().optional(),
            syncs: z.array(z.string()),
        })
        .transform((v) => {
            return {
                providerConfigKey: v.provider_config_key,
                ...(v.connection_id === undefined ? null : { connectionId: v.connection_id }),
                syncs: v.syncs,
            };
        });

    export type Outbound = {
        provider_config_key: string;
        connection_id?: string | undefined;
        syncs: Array<string>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateSyncStartRequest> = z
        .object({
            providerConfigKey: z.string(),
            connectionId: z.string().optional(),
            syncs: z.array(z.string()),
        })
        .transform((v) => {
            return {
                provider_config_key: v.providerConfigKey,
                ...(v.connectionId === undefined ? null : { connection_id: v.connectionId }),
                syncs: v.syncs,
            };
        });
}
