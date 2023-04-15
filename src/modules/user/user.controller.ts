import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User, UserSchema } from './user.schema';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateUserDTO } from './user.request';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private readonly todoService: UserService) {}

  @Get()
  @ApiBody({ description: 'Get all user' })
  async findAll(): Promise<User[]> {
    return this.todoService.findAll();
  }

  @Post()
  @ApiBody({ description: 'Get all user', type: User })
  async create(@Body() todo: CreateUserDTO): Promise<User> {
    return this.todoService.create(todo);
  }
}
