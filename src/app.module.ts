import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { GlobalHelpersModule } from './shared/global-helpers/global-helpers.module';
import { UtilsModule } from './shared/utils/utils.module';

@Module({
  imports: [CustomersModule, GlobalHelpersModule, UtilsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
