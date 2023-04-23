import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ApiBody, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ResponeModelDelete } from 'src/service/base.schema';
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
    return this.ProductService.getList(request);
  }

  @Post()
  @ApiBody({ type: Product })
  async createProduct(@Body() request: Product): Promise<Product> {
    return this.ProductService.create(request);
  }

  @Delete()
  @ApiParam({ name: 'id', type: 'string' })
  async deleteProduct(@Param() id: string): Promise<ResponeModelDelete> {
    return this.ProductService.delete(id);
  }
}
