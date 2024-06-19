/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { HTTPClient } from "./http";
import { RetryConfig } from "./retries";
import { Params, pathToFunc } from "./url";

/**
 * Production server
 */
export const ServerProd = "prod";
/**
 * Local server
 */
export const ServerLocal = "local";
/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = {
    [ServerProd]: "https://api.nango.dev",
    [ServerLocal]: "http://localhost:3003",
} as const;

export type SDKOptions = {
    httpClient?: HTTPClient;
    /**
     * Allows overriding the default server used by the SDK
     */
    server?: keyof typeof ServerList;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: RetryConfig;
};

export function serverURLFromOptions(options: SDKOptions): URL | null {
    let serverURL = options.serverURL;

    const params: Params = {};

    if (!serverURL) {
        const server = options.server ?? ServerProd;
        serverURL = ServerList[server] || "";
    }

    const u = pathToFunc(serverURL)(params);
    return new URL(u);
}

export const SDK_METADATA = {
    language: "typescript",
    openapiDocVersion: "1.0.0",
    sdkVersion: "0.8.0",
    genVersion: "2.342.6",
    userAgent: "speakeasy-sdk/typescript 0.8.0 2.342.6 1.0.0 @simplesagar92/nango",
} as const;
