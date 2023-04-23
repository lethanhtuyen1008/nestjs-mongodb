import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './modules/product/product.module';
import { CategoryProductModule } from './modules/categoryProduct/categoryProduct.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    UserModule,
    AuthModule,
    ProductModule,
    CategoryProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
