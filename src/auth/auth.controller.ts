import { Controller, Post, UseGuards, Res } from '@nestjs/common';
import { CurrentUser } from './current-user.decorator';
import type { Response } from 'express';
import { User } from '../users/entities/user.entity';
import { LocalAuthGuard } from './guards/local-auth-guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(
    @CurrentUser() user: User,
    @Res({ passthrough: true }) response: Response,
  ) {
    return this.authService.login(user, response);
  }

  @Post('logout')
  logout(@Res({ passthrough: true }) response: Response) {
    this.authService.logout(response);
  }
}
