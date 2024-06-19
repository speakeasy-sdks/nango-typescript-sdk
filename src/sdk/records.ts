/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

export class Records extends ClientSDK {
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

    /**
     * Returns data synced with Nango Sync, filtered by specified parameters.
     *
     * @remarks
     * Returns data synced with Nango Sync
     */
    async get(
        request: operations.GetRecordRequest,
        options?: RequestOptions
    ): Promise<operations.GetRecordResponse> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetRecordRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/records")();

        const query$ = encodeFormQuery$({
            cursor: payload$.cursor,
            delta: payload$.delta,
            filter: payload$.filter,
            limit: payload$.limit,
            model: payload$.model,
        });

        headers$.set(
            "Connection-Id",
            encodeSimple$("Connection-Id", payload$["Connection-Id"], {
                explode: false,
                charEncoding: "none",
            })
        );
        headers$.set(
            "Provider-Config-Key",
            encodeSimple$("Provider-Config-Key", payload$["Provider-Config-Key"], {
                explode: false,
                charEncoding: "none",
            })
        );
        const context = { operationID: "getRecord", oAuth2Scopes: [], securitySource: null };

        const doOptions = { context, errorCodes: ["400", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            { method: "GET", path: path$, headers: headers$, query: query$, body: body$ },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.GetRecordResponse>()
            .json(200, operations.GetRecordResponse$, { key: "GetRecordResponse" })
            .json(400, errors.Response400$, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
