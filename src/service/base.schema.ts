import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export interface ResponseModelList<T> {
  total: number;
  data: T[];
  currentPage: number;
}

export class RequestModelList {
  @Prop()
  @ApiProperty({ default: 0 })
  page: number;

  @Prop()
  @ApiProperty({ default: 20 })
  pageSize: number;
}
