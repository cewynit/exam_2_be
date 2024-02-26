import { AuthService } from './auth.service';
import { LoginDto } from './dto/auth.interface';
import { BaseController } from '../../common/base/base.controller';
export declare class AuthController extends BaseController {
    private readonly authService;
    constructor(authService: AuthService);
    Login(dto: LoginDto): Promise<{
        data: {
            accessToken: string;
            expiresIn: string;
            refresh_token: string;
            refresh_expiresIn: string;
            profile: {
                role: string;
            };
        };
    }>;
}
