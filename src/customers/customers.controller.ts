import { Controller,Get,HttpCode,Post,Req, UseGuards, Version } from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { GlobalHelpersService } from 'src/shared/global-helpers/global-helpers.service';
import { UtilsService } from 'src/shared/utils/utils.service';
@Controller({
    path:'customers',
    version:'1',
})
export class CustomersController {
    constructor(private readonly utilService: UtilsService,private readonly globalHelpers :GlobalHelpersService) {}
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
    @Get('serverdate')
    getServerDate(): string {
        return this.utilService.getServerDate();
    }
    @UseGuards(JwtAuthGuard)
    @Get('thaidate')
    getServerDateThai(): string {
        return this.globalHelpers.getThaiDate();
    }
}
