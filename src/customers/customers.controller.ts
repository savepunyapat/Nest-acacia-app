import { Controller,Get,HttpCode,Post,Req } from '@nestjs/common';
import { Request } from 'express';
@Controller('customers')
export class CustomersController {
    @Get()
    @HttpCode(201)
    findAll(): string {
        return 'This action returns all customers';
    }
    @Post()
    @HttpCode(200)
    create(@Req() request:Request): string {
        return request.body;
    }
}
