import { Controller, Post, UseGuards, Req, Res } from '@nestjs/common';
import { CurrentUser } from './current-user.decorator';
import { User } from '../users/entities/user.entity';

@Controller('auth')
export class AuthController {
  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(
    @CurrentUser()
    user: User,
    @Res({ passthrough: true })
    response: Response,
  ) {}
}
