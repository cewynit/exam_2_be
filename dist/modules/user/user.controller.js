"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const base_controller_1 = require("../../common/base/base.controller");
const user_service_1 = require("./user.service");
const user_interface_1 = require("./dto/user.interface");
const trim_body_pipe_1 = require("../../common/helper/pipe/trim.body.pipe");
const response_1 = require("../../common/helper/response");
const commonFunction_1 = require("../../common/helper/commonFunction");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const constants_1 = require("../../common/constants");
let UserController = class UserController extends base_controller_1.BaseController {
    constructor(UserService) {
        super();
        this.UserService = UserService;
    }
    async getAllUser(query) {
        return await this.UserService._findAllAndCountUserByQuery(query);
    }
    async createUser(dto, file) {
        try {
            file != null ? dto.image = await this.UserService.uploadImageToCloudinary(file) : dto.image = '';
            const result = await this.UserService._createUser(dto);
            return new response_1.SuccessResponse(result);
        }
        catch (error) {
            this.handleError(error);
        }
    }
    async updateUser(id, dto, file) {
        try {
            const user = await this.UserService._findUserById((0, commonFunction_1.toObjectId)(id));
            if (!user) {
                return new response_1.ErrorResponse(constants_1.HttpStatus.ITEM_NOT_FOUND, "User not found");
            }
            if (file != null) {
                if (user.image !== '') {
                    this.UserService.deleteImageByUrl(user.image);
                }
            }
            file != null ? dto.image = await this.UserService.uploadImageToCloudinary(file) : dto.image = user.image;
            const result = await this.UserService._updateUser((0, commonFunction_1.toObjectId)(id), dto);
            if (result)
                return new response_1.SuccessResponse(result);
            throw new common_1.HttpException("Update error", constants_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        catch (error) {
            this.handleError(error);
        }
    }
    async getUserById(id) {
        try {
            const result = await this.UserService._findUserById((0, commonFunction_1.toObjectId)(id));
            if (!result) {
                return new response_1.ErrorResponse(constants_1.HttpStatus.ITEM_NOT_FOUND, "User not found");
            }
            return new response_1.SuccessResponse(result);
        }
        catch (error) {
            this.handleError(error);
        }
    }
    async deleteUser(id) {
        try {
            const user = await this.UserService._findUserById((0, commonFunction_1.toObjectId)(id));
            if (!user) {
                return new response_1.ErrorResponse(constants_1.HttpStatus.NOT_FOUND, "User not found");
            }
            console.log(user.image);
            if (user.image !== '') {
                this.UserService.deleteImageByUrl(user.image);
            }
            const result = await this.UserService._deleteUser((0, commonFunction_1.toObjectId)(id));
            return new response_1.SuccessResponse(result);
        }
        catch (error) {
            this.handleError(error);
        }
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_interface_1.GetUserListQuery]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create User' }),
    (0, swagger_1.ApiBody)({ type: user_interface_1.createUserDto }),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Body)(new trim_body_pipe_1.TrimBodyPipe())),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_interface_1.createUserDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)(new trim_body_pipe_1.TrimBodyPipe())),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_interface_1.UpdateUserDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map