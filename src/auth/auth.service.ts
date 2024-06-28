import {
  ConflictException,
  HttpException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { PrismaService } from 'src/shared/db/prisma/prisma.service';
import { hash, genSalt, compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { de, id } from 'date-fns/locale';
import { access } from 'fs';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    try {
      const salt = await genSalt(10);
      const hashedPassword = await hash(registerDto.password, salt);
      const user = await this.prismaService.user.create({
        data: {
          email: registerDto.email,
          password: hashedPassword,
          name: registerDto.name,
        },
      });
      return {
        user: {
          email: user.email,
          name: user.name,
        },
      };
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('อีเมล์นี้มีผู้ใช้งานแล้ว');
      } else {
        throw new HttpException('เกิดข้อผิดพลาด', 500);
      }
    }
  }
  async login(loginDto: LoginDto) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: loginDto.email,
      },
    });
    if (!user) {
      throw new NotFoundException('ไม่พบผู้ใช้งาน');
    }
    const isPasswordMatch = await compare(loginDto.password, user.password);
    if (!isPasswordMatch) {
      throw new HttpException('รหัสผ่านไม่ถูกต้อง', 400);
    }
    const payload = {
      user_id: user.id,
      user_permission: user.permission,
    };
    const token = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET,
    });
    const tokenDecoded = this.jwtService.decode(token);
    return {
      access_token: token,
      expire_in: tokenDecoded['exp'],
    };
  }
  async getProfile(id: number) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id: id,
      },
      select:{
        id:true,
        email:true,
        name:true,
        permission:true,
        Profile:{
            select:{
                bio:true,
            }
        }
      }
    });
    if (!user) {
      throw new NotFoundException('ไม่พบผู้ใช้งาน');
    }
    return user;

  }
}
