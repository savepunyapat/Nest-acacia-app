import { Module } from '@nestjs/common';
import { NotiController } from './noti.controller';
import { NotiService } from './noti.service';
import { EventsModule } from 'src/events/events.module';

@Module({
  imports: [
    EventsModule
  ],
  controllers: [NotiController],
  providers: [NotiService]
})
export class NotiModule {}
