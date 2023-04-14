import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.schema';

@Controller('todo')
export class UserController {
  constructor(private readonly todoService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.todoService.findOne(id);
  }

  @Post()
  async create(@Body() todo: User): Promise<User> {
    return this.todoService.create(todo);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() todo: User): Promise<User> {
    return this.todoService.update(id, todo);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.todoService.delete(id);
  }
}
