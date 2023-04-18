import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { ApiBody, ApiQuery, ApiTags } from '@nestjs/swagger';
import {
  CategoryProduct,
  RequestCategoryProductList,
  ResponseCategoryProductList,
} from './categoryProduct.schema';
import { CategoryProductService } from './categoryProduct.service';

@ApiTags('Caterogy Product')
@Controller('caterogy-product')
export class CategoryProductController {
  constructor(
    private readonly CategoryProductService: CategoryProductService,
  ) {}

  @Get()
  @ApiQuery({
    type: RequestCategoryProductList,
  })
  async getList(
    @Query() request: RequestCategoryProductList,
  ): Promise<ResponseCategoryProductList> {
    return this.CategoryProductService.getList(request);
  }

  @Post()
  @ApiBody({ type: CategoryProduct })
  async createCategoryProduct(
    @Body() request: CategoryProduct,
  ): Promise<CategoryProduct> {
    return this.CategoryProductService.create(request);
  }
}
