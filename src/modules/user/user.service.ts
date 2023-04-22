import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/service/base.service';
import { User } from './user.schema';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(@InjectModel(User.name) UserModel: Model<User>) {
    super(UserModel);
  }
}
