import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/service/base.service';
import { CategoryProduct } from './categoryProduct.schema';

@Injectable()
export class CategoryProductService extends BaseService<CategoryProduct> {
  constructor(
    @InjectModel(CategoryProduct.name)
    private categoryProductModel: Model<CategoryProduct>,
  ) {
    super(categoryProductModel);
  }
}
