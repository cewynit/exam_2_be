"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtConstants = exports.RoleCollection = exports.MAX_PRICE = exports.MIN_PRICE = exports.PASSWORD_MIN_LENGTH = exports.MAX_INTEGER = exports.INPUT_PHONE_MAX_LENGTH = exports.ARRAY_MAX_LENGTH = exports.TEXTAREA_MAX_LENGTH = exports.URL_MAX_LENGTH = exports.FIREBASE_TOKEN_MAX_LENGTH = exports.INPUT_TEXT_MAX_LENGTH = exports.MAX_PAGE = exports.MAX_PAGE_LIMIT = exports.MIN_PAGE = exports.MIN_PAGE_LIMIT = exports.MIN_ID = exports.DEFAULT_MAX_DATE = exports.DEFAULT_MIN_DATE = exports.DEFAULT_ORDER_DIRECTION = exports.DEFAULT_ORDER_BY = exports.DEFAULT_FIRST_PAGE = exports.DEFAULT_LIMIT_FOR_PAGINATION = exports.DEFAULT_LIMIT_FOR_DROPDOWN = exports.TIMEZONE_NAME_DEFAULT = exports.TIMEZONE_DEFAULT = exports.TIMEZONE_NAME_HEADER = exports.TIMEZONE_HEADER = exports.LANGUAGE_HEADER = exports.DEFAULT_PORT = exports.OrderDirection = exports.softDeleteCondition = exports.HttpStatus = void 0;
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatus[HttpStatus["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatus[HttpStatus["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpStatus[HttpStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatus[HttpStatus["CONFLICT"] = 409] = "CONFLICT";
    HttpStatus[HttpStatus["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
    HttpStatus[HttpStatus["ITEM_NOT_FOUND"] = 444] = "ITEM_NOT_FOUND";
    HttpStatus[HttpStatus["ITEM_ALREADY_EXIST"] = 445] = "ITEM_ALREADY_EXIST";
    HttpStatus[HttpStatus["ITEM_INVALID"] = 446] = "ITEM_INVALID";
    HttpStatus[HttpStatus["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    HttpStatus[HttpStatus["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
})(HttpStatus || (exports.HttpStatus = HttpStatus = {}));
exports.softDeleteCondition = {
    $or: [
        {
            deletedAt: {
                $exists: true,
                $eq: null,
            },
        },
        {
            deletedAt: {
                $exists: false,
            },
        },
    ],
};
var OrderDirection;
(function (OrderDirection) {
    OrderDirection["ASC"] = "asc";
    OrderDirection["DESC"] = "desc";
})(OrderDirection || (exports.OrderDirection = OrderDirection = {}));
exports.DEFAULT_PORT = 3000;
exports.LANGUAGE_HEADER = 'accept-language';
exports.TIMEZONE_HEADER = 'x-timezone';
exports.TIMEZONE_NAME_HEADER = 'x-timezone-name';
exports.TIMEZONE_DEFAULT = '+09:00';
exports.TIMEZONE_NAME_DEFAULT = 'Asia/Tokyo';
exports.DEFAULT_LIMIT_FOR_DROPDOWN = 1000;
exports.DEFAULT_LIMIT_FOR_PAGINATION = 10;
exports.DEFAULT_FIRST_PAGE = 1;
exports.DEFAULT_ORDER_BY = 'createdAt';
exports.DEFAULT_ORDER_DIRECTION = 'desc';
exports.DEFAULT_MIN_DATE = '1970-01-01 00:00:00';
exports.DEFAULT_MAX_DATE = '3000-01-01 00:00:00';
exports.MIN_ID = 1;
exports.MIN_PAGE_LIMIT = 1;
exports.MIN_PAGE = 1;
exports.MAX_PAGE_LIMIT = 10000;
exports.MAX_PAGE = 10000;
exports.INPUT_TEXT_MAX_LENGTH = 255;
exports.FIREBASE_TOKEN_MAX_LENGTH = 2000;
exports.URL_MAX_LENGTH = 2048;
exports.TEXTAREA_MAX_LENGTH = 2000;
exports.ARRAY_MAX_LENGTH = 500;
exports.INPUT_PHONE_MAX_LENGTH = 15;
exports.MAX_INTEGER = 2147483647;
exports.PASSWORD_MIN_LENGTH = 6;
exports.MIN_PRICE = 0;
exports.MAX_PRICE = Number.MAX_SAFE_INTEGER;
var RoleCollection;
(function (RoleCollection) {
    RoleCollection["USERS"] = "User";
    RoleCollection["Admin"] = "Admin";
})(RoleCollection || (exports.RoleCollection = RoleCollection = {}));
exports.jwtConstants = {
    secret: 'asskakskakskdasdiqweuqwiu1231829892asd',
    expiresIn: 100,
    refresh_expiresIn: 3600
};
//# sourceMappingURL=constants.js.map