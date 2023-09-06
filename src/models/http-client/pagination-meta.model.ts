export interface IPaginationMeta
{
    size: number;
    total: number;
    page: number;
    count: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    nextPage: number | null;
    prevPage: number | null;
}

export interface IPaginateData<T>
{
    data: Array<T>,
    meta: IPaginationMeta
}