//config axios

// import { HttpVerbs, headers, serviceInfo } from '../models/http/http.model';
import axios, { AxiosInstance } from 'axios';
import { HttpVerbs, headers, IPaginateData } from '../../models';
// import { ICognitoData } from '../models/auth/auth.model';
// import { IPaginateData } from '../models/shared/pagination-meta.model';


abstract class AxiosBase<T> implements HttpVerbs<T>
{
    private customAxios: AxiosInstance;
    private cognitoCredentials: any; //change type

    constructor() {
        this.customAxios = axios.create({
            baseURL: 'https://rickandmortyapi.com/api/',
        });
    }

    private signUrl(unsignedUrl: string) {

        // const signedRequest = Signer.signUrl(
        //     `${this.customAxios.defaults.baseURL}${unsignedUrl}`,
        //     this.cognitoCredentials,
        //     serviceInfo
        // );

        return `${this.customAxios.defaults.baseURL}/${unsignedUrl}`;
    }

    // private signPostUrl(unsignedUrl: string, payload: any, method: string, headersfile?: boolean) {
    //     const headersf = {
    //         'Content-Type': 'multipart/form-data'
    //     }

    //     console.log('method', method)

    //     const request = {
    //         method: method ? method : 'POST',
    //         url: `${this.customAxios.defaults.baseURL}${unsignedUrl}`,
    //         service: 'execute-api',
    //         signQuery: true,
    //         data: payload,
    //         body: JSON.stringify(payload),
    //         headers: headersfile ? headersf : {
    //             'content-type': 'application/json',
    //         },
    //     }

    //     const signedRequest = Signer.signUrl(
    //         request,
    //         this.cognitoCredentials,
    //         serviceInfo
    //     );
    //     return signedRequest;
    // }

    private parseQueryParams(url: string, queryParams?: Record<string, any>): string {
        return `${url}?${Object.entries(Object.assign({}, queryParams)).map(([key, value]) => `${key}=${value}`).join('&')}`
    }

    async get(url: string, queryParams?: Record<string, any>): Promise<T[]> {
        return (await this.customAxios.get(this.signUrl(this.parseQueryParams(url, queryParams)), { headers: headers })).data;
    }
    
    async getElastic(url: string, queryParams?: Record<string, any>): Promise<{count: number, total: number, items: T[]}> {
        return (await this.customAxios.get(this.signUrl(this.parseQueryParams(url, queryParams)), { headers: headers })).data;
    }

    async getElasticPaginate<T>(url: string, queryParams?: Record<string, any>): Promise<IPaginateData<T>> { //make data meta class
        return (await this.customAxios.get(this.signUrl(this.parseQueryParams(url, queryParams)), { headers: headers })).data;
    }

    async getById(url: string, id: string | number): Promise<T> {
        return (await this.customAxios.get(this.signUrl(`${url}/${id}`), { headers: headers })).data
    }

    async post(url: string, data: Record<string, any>, queryParams?: Record<string, any>): Promise<T> {
        return (await this.customAxios.post(url, data, { params: queryParams, headers: headers })).data
    }

    async put(url: string, data: Record<string, any>, queryParams?: Record<string, any>): Promise<T> {
        return (await this.customAxios.put(url, data, { params: queryParams, headers: headers })).data
    }

    async delete(url: string, queryParams?: Record<string, any>): Promise<T> {
        return (await this.customAxios.delete(this.signUrl(url), { params: queryParams, headers: headers })).data
    }
}

class AxiosImp<T> extends AxiosBase<T> { }

export default AxiosImp;
