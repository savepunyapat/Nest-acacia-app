import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';
@Controller({
    path: 'auth',
    version:'1',
})
export class AuthController {
    constructor(private readonly authService:AuthService){}
    @Post('register')
    @HttpCode(201)
    async register(@Body() registerDto:RegisterDto ) {
        const response = await this.authService.register(registerDto);
        return {
            message:'สมัครสมาชิกสำเร็จ',
            response:response
        }
    }
    @Post('login')
    async login(@Body() loginDto:LoginDto){
        const response = await this.authService.login(loginDto);
        return {
            message:'เข้าสู่ระบบสำเร็จ',
            response:response
        }
    }
}
