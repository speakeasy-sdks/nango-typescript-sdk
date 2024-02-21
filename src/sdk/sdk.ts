/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../models/errors";
import * as operations from "../models/operations";
import { Action } from "./action";
import { Connections } from "./connections";
import { Delete } from "./delete";
import { Integrations } from "./integrations";
import { Proxy } from "./proxy";
import { Records } from "./records";
import { Sync } from "./sync";

export class Nango extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    private _integrations?: Integrations;
    get integrations() {
        return (this._integrations ??= new Integrations(this.options$));
    }

    private _connections?: Connections;
    get connections() {
        return (this._connections ??= new Connections(this.options$));
    }

    private _records?: Records;
    get records() {
        return (this._records ??= new Records(this.options$));
    }

    private _sync?: Sync;
    get sync() {
        return (this._sync ??= new Sync(this.options$));
    }

    private _action?: Action;
    get action() {
        return (this._action ??= new Action(this.options$));
    }

    private _proxy?: Proxy;
    get proxy() {
        return (this._proxy ??= new Proxy(this.options$));
    }

    private _delete?: Delete;
    get delete() {
        return (this._delete ??= new Delete(this.options$));
    }

    /**
     * Retrieve the environment variables as added in the Nango dashboard.
     *
     * @remarks
     * Retrieve the environment variables as added in the Nango dashboard
     */
    async getEnvironmentVariables(
        options?: RequestOptions
    ): Promise<operations.GetEnvironmentVariableResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent("/environment-variables")();

        const query$ = "";

        const context = { operationID: "getEnvironmentVariable" };
        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = await this.createRequest$(
            {
                context,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetEnvironmentVariableResponse$.inboundSchema.parse({
                ...responseFields$,
                GetEnvironmentVariableResponse: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }
}
