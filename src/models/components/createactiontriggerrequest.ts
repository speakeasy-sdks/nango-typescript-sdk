/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

/**
 * The necessary input for your action's 'runAction' function.
 */
export type Input = {};

export type CreateActionTriggerRequest = {
    /**
     * The name of the action to trigger.
     */
    actionName: string;
    /**
     * The necessary input for your action's 'runAction' function.
     */
    input?: Input | undefined;
};

/** @internal */
export namespace Input$ {
    export const inboundSchema: z.ZodType<Input, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Input> = z.object({});
}

/** @internal */
export namespace CreateActionTriggerRequest$ {
    export const inboundSchema: z.ZodType<CreateActionTriggerRequest, z.ZodTypeDef, unknown> = z
        .object({
            action_name: z.string(),
            input: z.lazy(() => Input$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                action_name: "actionName",
            });
        });

    export type Outbound = {
        action_name: string;
        input?: Input$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateActionTriggerRequest> = z
        .object({
            actionName: z.string(),
            input: z.lazy(() => Input$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                actionName: "action_name",
            });
        });
}
