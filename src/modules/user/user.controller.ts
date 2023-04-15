import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from 'src/auth/jwt/local-auth.guard';
import { CreateUserDTO } from './user.request';
import { User } from './user.schema';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private readonly todoService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.todoService.findAll();
  }

  // @UseGuards(LocalAuthGuard)
  @Post()
  @ApiBody({ description: 'Get all user', type: User })
  async create(@Body() todo: CreateUserDTO): Promise<User> {
    return this.todoService.create(todo);
  }
}
