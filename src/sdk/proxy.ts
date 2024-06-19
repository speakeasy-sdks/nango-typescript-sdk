/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeJSON as encodeJSON$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as operations from "../models/operations";

export class Proxy extends ClientSDK {
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
     * Make a GET request with the Proxy.
     *
     * @remarks
     * Make a GET request with the Proxy.
     */
    async get(
        request: operations.GetProxyRequest,
        options?: RequestOptions
    ): Promise<operations.GetProxyResponse> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "*/*");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetProxyRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            anyPath: encodeSimple$("anyPath", payload$.anyPath, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/proxy/{anyPath}")(pathParams$);

        const query$ = encodeFormQuery$({
            $ANY_QUERY_PARAMS: payload$.$ANY_QUERY_PARAMS,
        });

        headers$.set(
            "Base-Url-Override",
            encodeSimple$("Base-Url-Override", payload$["Base-Url-Override"], {
                explode: false,
                charEncoding: "none",
            })
        );
        headers$.set(
            "Connection-Id",
            encodeSimple$("Connection-Id", payload$["Connection-Id"], {
                explode: false,
                charEncoding: "none",
            })
        );
        headers$.set(
            "Decompress",
            encodeSimple$("Decompress", payload$.Decompress, {
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
        headers$.set(
            "Retries",
            encodeSimple$("Retries", payload$.Retries, { explode: false, charEncoding: "none" })
        );
        headers$.set(
            "nango-proxy-$ANY_HEADER",
            encodeSimple$("nango-proxy-$ANY_HEADER", payload$["nango-proxy-$ANY_HEADER"], {
                explode: false,
                charEncoding: "none",
            })
        );

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "getProxy",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.GetProxyResponse>()
            .void(200, operations.GetProxyResponse$)
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Make a POST request with the Proxy.
     *
     * @remarks
     * Make a POST request with the Proxy.
     */
    async create(
        request: operations.CreateProxyRequest,
        options?: RequestOptions
    ): Promise<operations.CreateProxyResponse> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "*/*");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.CreateProxyRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.CreateProxyRequest, { explode: true });

        const pathParams$ = {
            anyPath: encodeSimple$("anyPath", payload$.anyPath, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/proxy/{anyPath}")(pathParams$);

        const query$ = "";

        headers$.set(
            "Base-Url-Override",
            encodeSimple$("Base-Url-Override", payload$["Base-Url-Override"], {
                explode: false,
                charEncoding: "none",
            })
        );
        headers$.set(
            "Connection-Id",
            encodeSimple$("Connection-Id", payload$["Connection-Id"], {
                explode: false,
                charEncoding: "none",
            })
        );
        headers$.set(
            "Decompress",
            encodeSimple$("Decompress", payload$.Decompress, {
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
        headers$.set(
            "Retries",
            encodeSimple$("Retries", payload$.Retries, { explode: false, charEncoding: "none" })
        );
        headers$.set(
            "nango-proxy-$ANY_HEADER",
            encodeSimple$("nango-proxy-$ANY_HEADER", payload$["nango-proxy-$ANY_HEADER"], {
                explode: false,
                charEncoding: "none",
            })
        );

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "createProxy",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.CreateProxyResponse>()
            .void(200, operations.CreateProxyResponse$)
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Make a PUT request with the Proxy.
     *
     * @remarks
     * Make a PUT request with the Proxy.
     */
    async update(
        request: operations.PutProxyRequest,
        options?: RequestOptions
    ): Promise<operations.PutProxyResponse> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "*/*");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.PutProxyRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.PutProxyRequest, { explode: true });

        const pathParams$ = {
            anyPath: encodeSimple$("anyPath", payload$.anyPath, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/proxy/{anyPath}")(pathParams$);

        const query$ = "";

        headers$.set(
            "Base-Url-Override",
            encodeSimple$("Base-Url-Override", payload$["Base-Url-Override"], {
                explode: false,
                charEncoding: "none",
            })
        );
        headers$.set(
            "Connection-Id",
            encodeSimple$("Connection-Id", payload$["Connection-Id"], {
                explode: false,
                charEncoding: "none",
            })
        );
        headers$.set(
            "Decompress",
            encodeSimple$("Decompress", payload$.Decompress, {
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
        headers$.set(
            "Retries",
            encodeSimple$("Retries", payload$.Retries, { explode: false, charEncoding: "none" })
        );
        headers$.set(
            "nango-proxy-$ANY_HEADER",
            encodeSimple$("nango-proxy-$ANY_HEADER", payload$["nango-proxy-$ANY_HEADER"], {
                explode: false,
                charEncoding: "none",
            })
        );

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "putProxy",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "PUT",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.PutProxyResponse>()
            .void(200, operations.PutProxyResponse$)
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Make a PATCH request with the Proxy.
     *
     * @remarks
     * Make a PATCH request with the Proxy.
     */
    async patch(
        request: operations.PatchProxyRequest,
        options?: RequestOptions
    ): Promise<operations.PatchProxyResponse> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "*/*");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.PatchProxyRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.PatchProxyRequest, { explode: true });

        const pathParams$ = {
            anyPath: encodeSimple$("anyPath", payload$.anyPath, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/proxy/{anyPath}")(pathParams$);

        const query$ = "";

        headers$.set(
            "Base-Url-Override",
            encodeSimple$("Base-Url-Override", payload$["Base-Url-Override"], {
                explode: false,
                charEncoding: "none",
            })
        );
        headers$.set(
            "Connection-Id",
            encodeSimple$("Connection-Id", payload$["Connection-Id"], {
                explode: false,
                charEncoding: "none",
            })
        );
        headers$.set(
            "Decompress",
            encodeSimple$("Decompress", payload$.Decompress, {
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
        headers$.set(
            "Retries",
            encodeSimple$("Retries", payload$.Retries, { explode: false, charEncoding: "none" })
        );
        headers$.set(
            "nango-proxy-$ANY_HEADER",
            encodeSimple$("nango-proxy-$ANY_HEADER", payload$["nango-proxy-$ANY_HEADER"], {
                explode: false,
                charEncoding: "none",
            })
        );

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "patchProxy",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "PATCH",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.PatchProxyResponse>()
            .void(200, operations.PatchProxyResponse$)
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Make a DELETE request with the Proxy.
     *
     * @remarks
     * Make a DELETE request with the Proxy.
     */
    async deletes(
        request: operations.DeleteProxyRequest,
        options?: RequestOptions
    ): Promise<operations.DeleteProxyResponse> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "*/*");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.DeleteProxyRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            anyPath: encodeSimple$("anyPath", payload$.anyPath, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/proxy/{anyPath}")(pathParams$);

        const query$ = encodeFormQuery$({
            $ANY_QUERY_PARAMS: payload$.$ANY_QUERY_PARAMS,
        });

        headers$.set(
            "Base-Url-Override",
            encodeSimple$("Base-Url-Override", payload$["Base-Url-Override"], {
                explode: false,
                charEncoding: "none",
            })
        );
        headers$.set(
            "Connection-Id",
            encodeSimple$("Connection-Id", payload$["Connection-Id"], {
                explode: false,
                charEncoding: "none",
            })
        );
        headers$.set(
            "Decompress",
            encodeSimple$("Decompress", payload$.Decompress, {
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
        headers$.set(
            "Retries",
            encodeSimple$("Retries", payload$.Retries, { explode: false, charEncoding: "none" })
        );
        headers$.set(
            "nango-proxy-$ANY_HEADER",
            encodeSimple$("nango-proxy-$ANY_HEADER", payload$["nango-proxy-$ANY_HEADER"], {
                explode: false,
                charEncoding: "none",
            })
        );

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "deleteProxy",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.DeleteProxyResponse>()
            .void(200, operations.DeleteProxyResponse$)
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
