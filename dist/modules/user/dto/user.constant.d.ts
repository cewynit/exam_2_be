import { User } from "../../../database/schemas/user.schema";
export declare enum UserOrderBy {
    ID = "id",
    CREATED_AT = "created_at",
    UPDATED_AT = "updatedAt"
}
export declare const UserAttributesForList: (keyof User)[];
