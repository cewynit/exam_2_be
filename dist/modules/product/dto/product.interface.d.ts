import { CommonListQuery } from "../../../common/interfaces";
import { ProoductOrderBy } from "./product.contant";
export declare class createProductDto {
    name?: string;
    price: number;
    quantity: number;
    description?: string;
    image?: string;
}
export declare class updateProductDto {
    name?: string;
    price?: number;
    quantity?: number;
    description?: string;
    image?: string;
}
export declare class GetProductListQuery extends CommonListQuery {
    orderBy?: ProoductOrderBy;
}
