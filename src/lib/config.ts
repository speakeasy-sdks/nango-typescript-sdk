/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { HTTPClient } from "./http";
import { RetryConfig } from "./retries";
import { pathToFunc } from "./url";

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

    const params: Record<string, string> = {};
    const server = options.server ?? ServerProd;

    if (!serverURL) {
        serverURL = ServerList[server] || "";
    }

    const u = pathToFunc(serverURL)(params);
    return new URL(u);
}

export const SDK_METADATA = Object.freeze({
    language: "typescript",
    openapiDocVersion: "1.0.0",
    sdkVersion: "0.1.0",
    genVersion: "2.263.3",
    userAgent: "speakeasy-sdk/typescript 0.1.0 2.263.3 1.0.0 @nango/sdk",
});
