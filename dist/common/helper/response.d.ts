import { HttpStatus } from '../constants';
export interface IErrorResponse {
    key: string;
    order?: number;
    message: string;
    value?: any;
}
export declare class SuccessResponse {
    constructor(data?: {});
}
export declare class ErrorResponse {
    constructor(code?: HttpStatus, message?: string, errors?: IErrorResponse[]);
}
export declare class HttpResponse<T = string> {
    constructor(code: T, message?: string, data?: any);
}
export declare class ApiResponse<T> {
    code: number;
    message: string;
    data: T;
    errors: IErrorResponse[];
}
