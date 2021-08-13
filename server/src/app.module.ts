import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameGateway } from './game.gateway';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [AppController],
  providers: [AppService, GameGateway],
  imports: [MongooseModule.forRoot(process.env.DB)],
})
export class AppModule {}
