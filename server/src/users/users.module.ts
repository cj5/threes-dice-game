import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from "./user.schema";
import { User } from './user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])]
})
export class UsersModule {}
