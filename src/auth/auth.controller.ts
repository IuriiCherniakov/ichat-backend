import { Controller, Post, UseGuards, Res } from '@nestjs/common';
import { CurrentUser } from './current-user.decorator';
import express from 'express';
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
    @Res({ passthrough: true }) response: express.Response, // TODO: fix it later
  ) {
    console.log('user from controller', user);
    return this.authService.login(user, response);
  }
}
