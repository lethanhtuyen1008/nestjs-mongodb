import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private model: Model<User>) {}

  async create(todo: User): Promise<User> {
    const createdTodo = new this.model(todo);
    return createdTodo.save();
  }

  async findAll(): Promise<User[]> {
    return this.model.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return this.model.findById(id).exec();
  }

  async update(id: string, todo: User): Promise<User> {
    return this.model.findByIdAndUpdate(id, todo, { new: true }).exec();
  }

  async delete(id: string): Promise<void> {
    await this.model.findByIdAndDelete(id).exec();
  }
}
