import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";

@WebSocketGateway()
export class GameGateway {
  @WebSocketServer()
  server;

  @SubscribeMessage('addUser')
  handleAddUser(@MessageBody() data: string): void {
    this.server.emit('addUser', data);
  }
}
