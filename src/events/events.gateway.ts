import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors:{
    origin:'*'
  }
})
export class EventsGateway {
  @WebSocketServer()
  server:Server

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }
  boardcastMessage(data: any){
    this.server.emit('boardcastEvent',data);
  }
}
