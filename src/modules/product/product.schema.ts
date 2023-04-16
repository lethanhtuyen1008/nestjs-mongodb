import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  @ApiProperty({ default: 'Product 1' })
  name: string;

  @Prop()
  @ApiProperty({ default: 100 })
  quantity: number;

  @Prop()
  @ApiProperty({ default: new Date() })
  create_at: Date;

  @Prop()
  @ApiProperty({ default: new Date() })
  update_at: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

export interface ResponseProductList {
  total: number;
  data: Product[];
  currentPage: number;
}

export class RequestProductList {
  @Prop()
  @ApiProperty({ default: 0 })
  page: number;

  @Prop()
  @ApiProperty({ default: 20 })
  pageSize: number;
}
