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
import {
  CategoryProduct,
  RequestCategoryProductList,
  ResponseCategoryProductList,
} from './categoryProduct.schema';
import { CategoryProductService } from './categoryProduct.service';

@ApiTags('Category Product')
@Controller('category-product')
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

  @Delete(':id')
  @ApiParam({ name: 'id' })
  async deleteCategoryProduct(
    @Param() id: string,
  ): Promise<{ status: number; message: string }> {
    return this.CategoryProductService.delete(id);
  }
}
