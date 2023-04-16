import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { User } from 'src/modules/user/user.schema';
import { AuthService } from './auth.service';
import { SignInRequest } from './types';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('signIn')
  @ApiBody({ description: 'Get all user', type: SignInRequest })
  signIn(@Body() request: SignInRequest) {
    return this.authService.signIn(request.username, request.password);
  }

  @Post('signUp')
  register(@Body() body: User) {
    return this.authService.createUser(body);
  }
}
