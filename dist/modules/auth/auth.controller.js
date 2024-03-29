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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const swagger_1 = require("@nestjs/swagger");
const auth_interface_1 = require("./dto/auth.interface");
const trim_body_pipe_1 = require("../../common/helper/pipe/trim.body.pipe");
const base_controller_1 = require("../../common/base/base.controller");
let AuthController = class AuthController extends base_controller_1.BaseController {
    constructor(authService) {
        super();
        this.authService = authService;
    }
    async Login(dto) {
        try {
            return await this.authService.login(dto);
        }
        catch (error) {
            this.handleError(error);
        }
    }
    async RefreshToken(dto) {
        try {
            return await this.authService.refresh(dto);
        }
        catch (error) {
            this.handleError(error);
        }
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiBody)({ type: auth_interface_1.LoginDto }),
    (0, swagger_1.ApiOperation)({ summary: 'Login' }),
    __param(0, (0, common_1.Body)(new trim_body_pipe_1.TrimBodyPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_interface_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "Login", null);
__decorate([
    (0, common_1.Post)('refresh'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_interface_1.RefreshTokenDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "RefreshToken", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map