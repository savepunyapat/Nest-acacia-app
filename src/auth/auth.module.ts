import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaModule } from 'src/shared/db/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[
    PrismaModule,
    JwtModule.register({
      global: true,
      signOptions:{expiresIn:'30d'}
    }), 
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
