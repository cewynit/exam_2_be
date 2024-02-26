"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponse = exports.HttpResponse = exports.ErrorResponse = exports.SuccessResponse = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../constants");
const { VERSION: version = '1.0.0' } = process.env;
const DEFAULT_SUCCESS_MESSAGE = 'success';
class SuccessResponse {
    constructor(data = {}) {
        return {
            code: constants_1.HttpStatus.OK,
            message: DEFAULT_SUCCESS_MESSAGE,
            data,
            version,
        };
    }
}
exports.SuccessResponse = SuccessResponse;
class ErrorResponse {
    constructor(code = constants_1.HttpStatus.INTERNAL_SERVER_ERROR, message = '', errors = []) {
        return {
            code,
            message,
            errors,
        };
    }
}
exports.ErrorResponse = ErrorResponse;
class HttpResponse {
    constructor(code, message = DEFAULT_SUCCESS_MESSAGE, data) {
        return {
            code,
            message,
            data,
        };
    }
}
exports.HttpResponse = HttpResponse;
let ApiResponse = class ApiResponse {
};
exports.ApiResponse = ApiResponse;
exports.ApiResponse = ApiResponse = __decorate([
    (0, common_1.Injectable)()
], ApiResponse);
//# sourceMappingURL=response.js.map