import { CommonListQuery } from "../../../common/interfaces";
import { UserOrderBy } from "./user.constant";
export declare class createUserDto {
    name: string;
    email: string;
    password: string;
    birthday: string;
    phone: string;
    role?: string;
    image?: string;
}
export declare class UpdateUserDto {
    name?: string;
    email?: string;
    password?: string;
    birthday?: string;
    phone?: string;
    role?: string;
    image?: string;
}
export declare class GetUserListQuery extends CommonListQuery {
    orderBy?: UserOrderBy;
}
