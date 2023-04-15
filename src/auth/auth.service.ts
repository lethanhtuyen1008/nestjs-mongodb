import { Injectable } from '@nestjs/common';
import { UserService } from '../modules/user/user.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user) {
      const { ...result } = user;
      return result;
    }
    return null;
  }
}
