/**
 * Swagger Petstore
 * This is a sample server Petstore server.  You can find out more about Swagger at <a href=\"http://swagger.io\">http://swagger.io</a> or on irc.freenode.net, #swagger.  For this sample, you can use the api key \"special-key\" to test the authorization filters
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@wordnik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


import * as $ from 'jquery';
import * as models from '../model/models';
import { COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


export class StoreApi {
    protected basePath = 'http://petstore.swagger.io/v2';
    public defaultHeaders: Array<string> = [];
    public configuration: Configuration = new Configuration();

    constructor(basePath?: string, configuration?: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    private extendObj<T1, T2 extends T1>(objA: T2, objB: T2): T1|T2 {
        for (let key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    }

    /**
     * Delete purchase order by ID
     * For valid response try integer IDs with value &lt; 1000. Anything above 1000 or nonintegers will generate API errors
     * @param orderId ID of the order that needs to be deleted
     */
    public deleteOrder(orderId: string): JQueryPromise<{ response: JQueryXHR; body?: any;  }> {
        let localVarPath = this.basePath + '/store/order/{orderId}'.replace('{' + 'orderId' + '}', String(orderId));

        let queryParameters: any = {};
        let headerParams: any = {};
        // verify required parameter 'orderId' is not null or undefined
        if (orderId === null || orderId === undefined) {
            throw new Error('Required parameter orderId was null or undefined when calling deleteOrder.');
        }


        localVarPath = localVarPath + "?" + $.param(queryParameters);
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json', 
            'application/xml'
        ];


        let requestOptions: JQueryAjaxSettings = {
            url: localVarPath,
            type: 'DELETE',
            headers: headerParams,
            processData: false
        };

        if (headerParams['Content-Type']) {
            requestOptions.contentType = headerParams['Content-Type'];
        }

        let dfd = $.Deferred();
        $.ajax(requestOptions).then(
            (data: any, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve(jqXHR, data),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject(xhr, errorThrown)
        );
        return dfd.promise();
    }

    /**
     * Returns pet inventories by status
     * Returns a map of status codes to quantities
     */
    public getInventory(): JQueryPromise<{ response: JQueryXHR; body: { [key: string]: number; };  }> {
        let localVarPath = this.basePath + '/store/inventory';

        let queryParameters: any = {};
        let headerParams: any = {};

        localVarPath = localVarPath + "?" + $.param(queryParameters);
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json', 
            'application/xml'
        ];

        // authentication (api_key) required
        if (this.configuration.apiKey) {
            headerParams['api_key'] = this.configuration.apiKey;
        }


        let requestOptions: JQueryAjaxSettings = {
            url: localVarPath,
            type: 'GET',
            headers: headerParams,
            processData: false
        };

        if (headerParams['Content-Type']) {
            requestOptions.contentType = headerParams['Content-Type'];
        }

        let dfd = $.Deferred();
        $.ajax(requestOptions).then(
            (data: { [key: string]: number; }, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve(jqXHR, data),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject(xhr, errorThrown)
        );
        return dfd.promise();
    }

    /**
     * Find purchase order by ID
     * For valid response try integer IDs with value &lt;&#x3D; 5 or &gt; 10. Other values will generated exceptions
     * @param orderId ID of pet that needs to be fetched
     */
    public getOrderById(orderId: string): JQueryPromise<{ response: JQueryXHR; body: models.Order;  }> {
        let localVarPath = this.basePath + '/store/order/{orderId}'.replace('{' + 'orderId' + '}', String(orderId));

        let queryParameters: any = {};
        let headerParams: any = {};
        // verify required parameter 'orderId' is not null or undefined
        if (orderId === null || orderId === undefined) {
            throw new Error('Required parameter orderId was null or undefined when calling getOrderById.');
        }


        localVarPath = localVarPath + "?" + $.param(queryParameters);
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json', 
            'application/xml'
        ];


        let requestOptions: JQueryAjaxSettings = {
            url: localVarPath,
            type: 'GET',
            headers: headerParams,
            processData: false
        };

        if (headerParams['Content-Type']) {
            requestOptions.contentType = headerParams['Content-Type'];
        }

        let dfd = $.Deferred();
        $.ajax(requestOptions).then(
            (data: models.Order, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve(jqXHR, data),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject(xhr, errorThrown)
        );
        return dfd.promise();
    }

    /**
     * Place an order for a pet
     * 
     * @param body order placed for purchasing the pet
     */
    public placeOrder(body?: models.Order): JQueryPromise<{ response: JQueryXHR; body: models.Order;  }> {
        let localVarPath = this.basePath + '/store/order';

        let queryParameters: any = {};
        let headerParams: any = {};


        localVarPath = localVarPath + "?" + $.param(queryParameters);
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json', 
            'application/xml'
        ];


        headerParams['Content-Type'] = 'application/json';

        let requestOptions: JQueryAjaxSettings = {
            url: localVarPath,
            type: 'POST',
            headers: headerParams,
            processData: false
        };

        requestOptions.data = JSON.stringify(body);
        if (headerParams['Content-Type']) {
            requestOptions.contentType = headerParams['Content-Type'];
        }

        let dfd = $.Deferred();
        $.ajax(requestOptions).then(
            (data: models.Order, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve(jqXHR, data),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject(xhr, errorThrown)
        );
        return dfd.promise();
    }

}
