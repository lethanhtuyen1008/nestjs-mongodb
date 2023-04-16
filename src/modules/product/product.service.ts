import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Product,
  RequestProductList,
  ResponseProductList,
} from './product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private ProductModel: Model<Product>,
  ) {}

  async create(request: Product): Promise<Product> {
    const createdRequest = new this.ProductModel(request);
    return createdRequest.save();
  }

  async getList(request: RequestProductList): Promise<ResponseProductList> {
    const page = request.page || 0;
    const pageSize = request.pageSize || 20;

    const total = await this.ProductModel.count().exec();
    const data = await this.ProductModel.find()
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
