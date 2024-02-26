import { BaseService } from 'src/common/base/base.service';
import { User } from 'src/database/schemas/user.schema';
import { AuthRepository } from './repository/auth.repository';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/auth.interface';
export declare class AuthService extends BaseService<User, AuthRepository> {
    private readonly authRepository;
    private jwtService;
    constructor(authRepository: AuthRepository, jwtService: JwtService);
    login(dto: LoginDto): Promise<{
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
