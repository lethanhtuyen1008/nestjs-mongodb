import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private UserModel: Model<User>) {}

  async create(request: User): Promise<User> {
    const createdRequest = new this.UserModel(request);
    return createdRequest.save();
  }

  async findAll(): Promise<User[]> {
    return this.UserModel.find().exec();
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.UserModel.findOne({ username });
  }
}
