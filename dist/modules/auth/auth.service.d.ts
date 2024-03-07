import { BaseService } from '../../common/base/base.service';
import { User } from '../../database/schemas/user.schema';
import { AuthRepository } from './repository/auth.repository';
import { JwtService } from '@nestjs/jwt';
import { LoginDto, RefreshTokenDto } from './dto/auth.interface';
export declare class AuthService extends BaseService<User, AuthRepository> {
    private readonly authRepository;
    private jwtService;
    constructor(authRepository: AuthRepository, jwtService: JwtService);
    login(dto: LoginDto): Promise<{
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
    refresh(dto: RefreshTokenDto): Promise<{
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
