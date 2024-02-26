import { OrderDirection } from "./constants";
export declare class CommonListQuery {
    page?: number;
    limit?: number;
    orderBy?: string;
    orderDirection?: OrderDirection;
    keyword?: string;
}
