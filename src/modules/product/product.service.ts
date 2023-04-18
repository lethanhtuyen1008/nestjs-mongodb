import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/service/base.service';
import { Product } from './product.schema';

@Injectable()
export class ProductService extends BaseService<Product> {
  constructor(@InjectModel(Product.name) private ProductModel: Model<Product>) {
    super(ProductModel);
  }
}
