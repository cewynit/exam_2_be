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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const base_service_1 = require("../../common/base/base.service");
const auth_repository_1 = require("./repository/auth.repository");
const jwt_1 = require("@nestjs/jwt");
const constants_1 = require("../../common/constants");
let AuthService = class AuthService extends base_service_1.BaseService {
    constructor(authRepository, jwtService) {
        super(authRepository);
        this.authRepository = authRepository;
        this.jwtService = jwtService;
    }
    async login(dto) {
        try {
            const user = await this.authRepository.findOne(dto);
            if (user?.password !== dto.password) {
                throw new common_1.UnauthorizedException();
            }
            const payload = { sub: user._id, email: user.email, roles: user.role };
            const accessToken = this.jwtService.sign(payload, {
                secret: constants_1.jwtConstants.secret,
                expiresIn: constants_1.jwtConstants.expiresIn,
            });
            const refreshToken = this.jwtService.sign(payload, {
                secret: constants_1.jwtConstants.secret,
                expiresIn: constants_1.jwtConstants.refresh_expiresIn,
            });
            return {
                data: {
                    accessToken: accessToken,
                    expiresIn: constants_1.jwtConstants.expiresIn,
                    refreshToken: refreshToken,
                    refresh_expiresIn: constants_1.jwtConstants.refresh_expiresIn,
                    profile: {
                        role: user.role,
                    }
                }
            };
        }
        catch (error) {
            this.logger.error('Error in Login: ' + error);
            throw error;
        }
    }
    async refresh(dto) {
        try {
            const data = this.jwtService.verify(dto.refresh_token, {
                secret: constants_1.jwtConstants.secret,
            });
            const payload = { sub: data._id, email: data.email, roles: data.role };
            const accessToken = this.jwtService.sign(payload, {
                secret: constants_1.jwtConstants.secret,
                expiresIn: constants_1.jwtConstants.expiresIn,
            });
            const refreshToken = this.jwtService.sign(payload, {
                secret: constants_1.jwtConstants.secret,
                expiresIn: constants_1.jwtConstants.refresh_expiresIn,
            });
            return {
                data: {
                    accessToken: accessToken,
                    expiresIn: constants_1.jwtConstants.expiresIn,
                    refreshToken: refreshToken,
                    refresh_expiresIn: constants_1.jwtConstants.refresh_expiresIn,
                    profile: {
                        role: data.role,
                    }
                }
            };
        }
        catch (error) {
            this.logger.error('Error in refresh: ' + error);
            throw error;
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_repository_1.AuthRepository,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map