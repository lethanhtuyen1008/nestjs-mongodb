import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiBody, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import {
  Product,
  RequestProductList,
  ResponseProductList,
} from './product.schema';
import { ProductService } from './product.service';

@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private readonly ProductService: ProductService) {}

  @Get()
  @ApiQuery({
    type: RequestProductList,
  })
  async getList(
    @Query() request: RequestProductList,
  ): Promise<ResponseProductList> {
    console.log(request);
    return this.ProductService.getList(request);
  }

  @Post()
  @ApiBody({ type: Product })
  async createProduct(@Body() request: Product): Promise<Product> {
    return this.ProductService.create(request);
  }
}
