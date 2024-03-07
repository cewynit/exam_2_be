export declare enum HttpStatus {
    OK = 200,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    CONFLICT = 409,
    UNPROCESSABLE_ENTITY = 422,
    ITEM_NOT_FOUND = 444,
    ITEM_ALREADY_EXIST = 445,
    ITEM_INVALID = 446,
    INTERNAL_SERVER_ERROR = 500,
    SERVICE_UNAVAILABLE = 503
}
export declare const softDeleteCondition: {
    $or: ({
        deletedAt: {
            $exists: boolean;
            $eq: any;
        };
    } | {
        deletedAt: {
            $exists: boolean;
            $eq?: undefined;
        };
    })[];
};
export declare enum OrderDirection {
    ASC = "asc",
    DESC = "desc"
}
export declare const DEFAULT_PORT = 3000;
export declare const LANGUAGE_HEADER = "accept-language";
export declare const TIMEZONE_HEADER = "x-timezone";
export declare const TIMEZONE_NAME_HEADER = "x-timezone-name";
export declare const TIMEZONE_DEFAULT = "+09:00";
export declare const TIMEZONE_NAME_DEFAULT = "Asia/Tokyo";
export declare const DEFAULT_LIMIT_FOR_DROPDOWN = 1000;
export declare const DEFAULT_LIMIT_FOR_PAGINATION = 10;
export declare const DEFAULT_FIRST_PAGE = 1;
export declare const DEFAULT_ORDER_BY = "createdAt";
export declare const DEFAULT_ORDER_DIRECTION = "desc";
export declare const DEFAULT_MIN_DATE = "1970-01-01 00:00:00";
export declare const DEFAULT_MAX_DATE = "3000-01-01 00:00:00";
export declare const MIN_ID = 1;
export declare const MIN_PAGE_LIMIT = 1;
export declare const MIN_PAGE = 1;
export declare const MAX_PAGE_LIMIT = 10000;
export declare const MAX_PAGE = 10000;
export declare const INPUT_TEXT_MAX_LENGTH = 255;
export declare const FIREBASE_TOKEN_MAX_LENGTH = 2000;
export declare const URL_MAX_LENGTH = 2048;
export declare const TEXTAREA_MAX_LENGTH = 2000;
export declare const ARRAY_MAX_LENGTH = 500;
export declare const INPUT_PHONE_MAX_LENGTH = 15;
export declare const MAX_INTEGER = 2147483647;
export declare const PASSWORD_MIN_LENGTH = 6;
export declare const MIN_PRICE = 0;
export declare const MAX_PRICE: number;
export declare enum RoleCollection {
    USERS = "User",
    Admin = "Admin"
}
export declare const jwtConstants: {
    secret: string;
    expiresIn: number;
    refresh_expiresIn: number;
};
