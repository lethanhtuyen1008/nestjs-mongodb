import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type CategoryProductDocument = HydratedDocument<CategoryProduct>;

@Schema()
export class CategoryProduct {
  @Prop()
  @ApiProperty({ default: 'Product 1' })
  name: string;

  @Prop()
  @ApiProperty({ default: new Date() })
  create_at: Date;

  @Prop()
  @ApiProperty({ default: new Date() })
  update_at: Date;
}

export const CategoryProductSchema =
  SchemaFactory.createForClass(CategoryProduct);

export interface ResponseCategoryProductList {
  total: number;
  data: CategoryProduct[];
  currentPage: number;
}

export class RequestCategoryProductList {
  @Prop()
  @ApiProperty({ default: 0 })
  page: number;

  @Prop()
  @ApiProperty({ default: 20 })
  pageSize: number;
}
