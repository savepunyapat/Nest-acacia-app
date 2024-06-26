import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { GlobalHelpersModule } from './shared/global-helpers/global-helpers.module';
import { UtilsModule } from './shared/utils/utils.module';
import { CategoriesModule } from './categories/categories.module';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
    ConfigModule.forRoot(),
    CustomersModule,
    GlobalHelpersModule, 
    UtilsModule, 
    CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
