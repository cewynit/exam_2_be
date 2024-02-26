/// <reference types="multer" />
import { BaseController } from "../../common/base/base.controller";
import { UserService } from "./user.service";
import { GetUserListQuery, UpdateUserDto, createUserDto } from "./dto/user.interface";
import { ErrorResponse, SuccessResponse } from "../../common/helper/response";
export declare class UserController extends BaseController {
    private readonly UserService;
    constructor(UserService: UserService);
    getAllUser(query: GetUserListQuery): Promise<{
        totalItems: any;
        items: any;
    }>;
    createUser(dto: createUserDto, file: Express.Multer.File): Promise<SuccessResponse>;
    updateUser(id: string, dto: UpdateUserDto, file: Express.Multer.File): Promise<SuccessResponse | ErrorResponse>;
    getUserById(id: string): Promise<SuccessResponse | ErrorResponse>;
    deleteUser(id: string): Promise<SuccessResponse | ErrorResponse>;
}
