import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO } from './user.request';
import { User } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(request: CreateUserDTO): Promise<User> {
    const createdRequest = new this.userModel(request);
    return createdRequest.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
