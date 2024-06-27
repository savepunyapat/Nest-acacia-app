import {
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAdminGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }
  handleRequest(
    err: any,
    user: any,
    info: any,
    context: ExecutionContext,
    status?: any,
  ) {
    console.log(user);
    if(err || !user) {
        throw err || new UnauthorizedException('Unauthorized');
    }
    if (user.user_permission !== 'admin') {
      throw new ForbiddenException('Permission denied');
    }

    return user;
  }
}
