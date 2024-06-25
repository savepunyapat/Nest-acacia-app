import { Module } from '@nestjs/common';
import { CustomersController } from './customers.controller';

@Module({
    imports: [],
    controllers: [CustomersController],
    providers: [],
})
export class CustomersModule {}
