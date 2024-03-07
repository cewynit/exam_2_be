import { AuthService } from './auth.service';
import { LoginDto, RefreshTokenDto } from './dto/auth.interface';
import { BaseController } from '../../common/base/base.controller';
export declare class AuthController extends BaseController {
    private readonly authService;
    constructor(authService: AuthService);
    Login(dto: LoginDto): Promise<{
        data: {
            accessToken: string;
            expiresIn: number;
            refreshToken: string;
            refresh_expiresIn: number;
            profile: {
                role: string;
            };
        };
    }>;
    RefreshToken(dto: RefreshTokenDto): Promise<{
        data: {
            accessToken: string;
            expiresIn: number;
            refreshToken: string;
            refresh_expiresIn: number;
            profile: {
                role: any;
            };
        };
    }>;
}
