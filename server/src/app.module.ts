import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameGateway } from './game.gateway';

@Module({
  controllers: [AppController],
  providers: [AppService, GameGateway],
})
export class AppModule {}
