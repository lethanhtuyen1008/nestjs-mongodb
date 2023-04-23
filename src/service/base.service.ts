import { Model, Types } from 'mongoose';
import {
  RequestModelList,
  ResponeModelDelete,
  ResponseModelList,
} from './base.schema';

export abstract class BaseService<T> {
  protected model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async findById(id: string): Promise<T | null> {
    return this.model.findById(id).exec();
  }

  async create(request: T): Promise<T> {
    const createdRequest = new this.model(request);
    return createdRequest.save();
  }

  async delete(id: string): Promise<ResponeModelDelete> {
    const objectId = new Types.ObjectId(id);

    await this.model.findOneAndDelete(objectId).exec();

    return {
      status: 200,
      message: 'success',
    };
  }

  async update(
    id: string,
    updateValue: T,
  ): Promise<{ status: number; message: string }> {
    const objectId = new Types.ObjectId(id);

    await this.model.findByIdAndUpdate(objectId, updateValue).exec();

    return {
      status: 200,
      message: 'success',
    };
  }

  async getList(request: RequestModelList): Promise<ResponseModelList<T>> {
    const page = request.page || 0;
    const pageSize = request.pageSize || 20;

    const total = await this.model.count().exec();
    const data = await this.model
      .find()
      .skip(page * pageSize)
      .limit(pageSize)
      .exec();

    return {
      total,
      currentPage: page,
      data,
    };
  }

  async findAll(): Promise<T[]> {
    return this.model.find().exec();
  }

  async findOne(username: string): Promise<T | undefined> {
    return this.model.findOne({ username });
  }
}
