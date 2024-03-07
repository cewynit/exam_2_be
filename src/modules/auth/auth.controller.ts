import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { LoginDto, RefreshTokenDto } from './dto/auth.interface';
import { TrimBodyPipe } from '../../common/helper/pipe/trim.body.pipe';
import { BaseController } from '../../common/base/base.controller';
import { SuccessResponse } from '../../common/helper/response';

@Controller('auth')
export class AuthController extends BaseController {
  constructor(private readonly authService: AuthService) {
    super();
  }

  @Post('login')
  @ApiBody({ type: LoginDto })
  @ApiOperation({ summary: 'Login' })
  async Login(@Body(new TrimBodyPipe()) dto: LoginDto) {
    try {
      return await this.authService.login(dto);
    } catch (error) {
      this.handleError(error);
    }
  }

  @Post('refresh')
  async RefreshToken(@Body() dto: RefreshTokenDto) {
    try {
      return await this.authService.refresh(dto);
    } catch (error) {
      this.handleError(error);
    }
  }
}
