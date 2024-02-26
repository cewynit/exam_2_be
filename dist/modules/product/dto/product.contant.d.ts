import { Product } from "../../../database/schemas/product.schema";
export declare enum ProoductOrderBy {
    ID = "id",
    CREATED_AT = "created_at",
    UPDATED_AT = "updatedAt"
}
export declare const ProductAttributesForList: (keyof Product)[];
