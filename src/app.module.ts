import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './modules/user/user.controller';
import { UserModel } from './modules/user/user.module';
import { User, UserSchema } from './modules/user/user.schema';
import { UserService } from './modules/user/user.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService, UserModel],
})
export class AppModule {}
