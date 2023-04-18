import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CategoryProduct,
  RequestCategoryProductList,
  ResponseCategoryProductList,
} from './categoryProduct.schema';

@Injectable()
export class CategoryProductService {
  constructor(
    @InjectModel(CategoryProduct.name)
    private CategoryProductModel: Model<CategoryProduct>,
  ) {}

  async create(request: CategoryProduct): Promise<CategoryProduct> {
    const createdRequest = new this.CategoryProductModel(request);
    return createdRequest.save();
  }

  async getList(
    request: RequestCategoryProductList,
  ): Promise<ResponseCategoryProductList> {
    const page = request.page || 0;
    const pageSize = request.pageSize || 20;

    const total = await this.CategoryProductModel.count().exec();
    const data = await this.CategoryProductModel.find()
      .skip(page * pageSize)
      .limit(pageSize)
      .exec();

    return {
      total,
      currentPage: page,
      data,
    };
  }
}