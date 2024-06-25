import { Controller,Get,HttpCode,Post,Req, Version } from '@nestjs/common';
import { Request } from 'express';
@Controller({
    path:'customers',
    version:'1',
})
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

    @Get()
    @Version('2')
    @HttpCode(201)
    findAll2(): string {
        return 'This action returns all customers v2';
    }
}
