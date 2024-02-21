/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type UpdateConnectionFrequencyRequest = {
    /**
     * The ID of the integration you established within Nango
     */
    providerConfigKey: string;
    /**
     * The ID of the connection
     */
    connectionId: string;
    /**
     * The name of the sync you want to update
     */
    syncName: string;
    /**
     * The frequency you want to set (ex: 'every hour'). Set null to revert to the default frequency
     */
    frequency: string;
};

/** @internal */
export namespace UpdateConnectionFrequencyRequest$ {
    export type Inbound = {
        provider_config_key: string;
        connection_id: string;
        sync_name: string;
        frequency: string;
    };

    export const inboundSchema: z.ZodType<UpdateConnectionFrequencyRequest, z.ZodTypeDef, Inbound> =
        z
            .object({
                provider_config_key: z.string(),
                connection_id: z.string(),
                sync_name: z.string(),
                frequency: z.string(),
            })
            .transform((v) => {
                return {
                    providerConfigKey: v.provider_config_key,
                    connectionId: v.connection_id,
                    syncName: v.sync_name,
                    frequency: v.frequency,
                };
            });

    export type Outbound = {
        provider_config_key: string;
        connection_id: string;
        sync_name: string;
        frequency: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UpdateConnectionFrequencyRequest
    > = z
        .object({
            providerConfigKey: z.string(),
            connectionId: z.string(),
            syncName: z.string(),
            frequency: z.string(),
        })
        .transform((v) => {
            return {
                provider_config_key: v.providerConfigKey,
                connection_id: v.connectionId,
                sync_name: v.syncName,
                frequency: v.frequency,
            };
        });
}