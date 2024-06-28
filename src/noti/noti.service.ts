import { Injectable } from '@nestjs/common';
import { title } from 'process';
import { EventsGateway } from 'src/events/events.gateway';
import { Cron ,CronExpression } from '@nestjs/schedule';

@Injectable()
export class NotiService {
    constructor(private readonly eventsGateway:EventsGateway) {}

    @Cron(CronExpression.EVERY_10_MINUTES)
    boardCastCron(){
        const data = {
            title: 'มีข่าวใหม่!!!',
        }
        this.eventsGateway.boardcastMessage(data);
    }
    @Cron(CronExpression.EVERY_10_SECONDS)
    boardCast(){
        const data = {
            title: 'มีข่าวใหม่!!!',
        }
        this.eventsGateway.boardcastMessage(data);
    }
}
