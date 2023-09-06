export interface HttpVerbs<T> {
    get(url: string, queryParams: Record<string, any>): Promise<T[]>;
    post(url: string, data: Record<string, any>, queryParams?: Record<string,any>): Promise<T>;
    put(url: string, data: Record<string, any>, queryParams?: Record<string,any>): Promise<T>;
}

export const headers = {
    //default headers
}

export const serviceInfo = {
    region: '',
    service: 'execute-api',
};


export interface httpResponse<T> {
    success: boolean,
    data: T
}