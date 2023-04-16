import { Controller, Get, Param } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { RequestProductList, ResponseProductList } from './product.schema';
import { ProductService } from './product.service';

@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private readonly ProductService: ProductService) {}

  @Get()
  async getList(
    @Param() request: RequestProductList,
  ): Promise<ResponseProductList> {
    return this.ProductService.getList(request);
  }
}
