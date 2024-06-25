import { Global, Module } from '@nestjs/common';
import { GlobalHelpersService } from './global-helpers.service';

@Global()
@Module({
  providers: [GlobalHelpersService],
  exports: [GlobalHelpersService],
})
export class GlobalHelpersModule {}
