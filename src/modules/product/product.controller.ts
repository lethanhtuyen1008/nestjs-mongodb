import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RequestProductList, ResponseProductList } from './product.schema';
import { ProductService } from './product.service';

@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private readonly ProductService: ProductService) {}

  @Get()
  async getList(request: RequestProductList): Promise<ResponseProductList> {
    return this.ProductService.getList(request);
  }
}
