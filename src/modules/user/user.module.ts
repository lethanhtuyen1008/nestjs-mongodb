import { Connection } from 'mongoose';
import { UserSchema } from './user.schema';

export const UserModel = {
  provide: 'UserModel',
  useFactory: (connection: Connection) => connection.model('user', UserSchema),
  inject: ['MongoDBConnection'],
};
