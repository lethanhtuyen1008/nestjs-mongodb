import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  @ApiProperty({ default: 'Le Thanh' })
  firstName: string;

  @Prop()
  @ApiProperty({ default: 'Tuyen' })
  lastName: string;

  @Prop()
  @ApiProperty({ default: '25' })
  age: number;

  @Prop()
  @ApiProperty({ default: 'tuyen@123' })
  password: string;

  @Prop()
  @ApiProperty({ default: 'tuyenlt' })
  username: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
