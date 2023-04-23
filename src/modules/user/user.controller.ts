import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from './user.schema';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.UserService.findAll();
  }
}
