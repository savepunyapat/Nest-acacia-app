import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { NotiService } from './noti.service';

@Controller({
    path: 'noti',
    version: '1',
})
export class NotiController {
    constructor(private readonly notiService:NotiService) {}

    @Get()
    @HttpCode(200)
    boardCast(){
        this.notiService.boardCast();
        return {message: 'success'};
    }
}
