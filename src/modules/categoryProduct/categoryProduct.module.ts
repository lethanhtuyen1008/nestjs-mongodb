import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryProductController } from './categoryProduct.controller';
import { CategoryProductService } from './categoryProduct.service';
import {
  CategoryProduct,
  CategoryProductSchema,
} from './categoryProduct.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CategoryProduct.name,
        schema: CategoryProductSchema,
        collection: 'category_products',
      },
    ]),
  ],
  controllers: [CategoryProductController],
  providers: [CategoryProductService],
  exports: [CategoryProductService],
})
export class CategoryProductModule {}
