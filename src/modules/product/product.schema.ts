import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  @ApiProperty({ default: 'Le Thanh' })
  firstName: string;

  @Prop()
  @ApiProperty({ default: 'Tuyen' })
  lastName: string;

  @Prop()
  @ApiProperty({ default: '25' })
  age: number;

  @Prop()
  @ApiProperty({ default: 'tuyen@123' })
  password: string;

  @Prop()
  @ApiProperty({ default: 'tuyenlt' })
  username: string;
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
