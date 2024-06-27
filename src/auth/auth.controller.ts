import { Body, Controller, Get, HttpCode, Post, UseGuards,Request } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  @HttpCode(201)
  async register(@Body() registerDto: RegisterDto) {
    const response = await this.authService.register(registerDto);
    return {
      message: 'สมัครสมาชิกสำเร็จ',
      response: response,
    };
  }
  @HttpCode(200)
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const response = await this.authService.login(loginDto);
    return {
      message: 'เข้าสู่ระบบสำเร็จ',
      response: response,
    };
  }
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
