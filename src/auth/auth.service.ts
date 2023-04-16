import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../modules/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './auth.constants';
import { validate } from 'class-validator';
import * as bcrypt from 'bcrypt';
import { LoggerService } from 'src/logger/logger.service';
import { User } from 'src/modules/user/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    private logger: LoggerService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user) {
      const { ...result } = user;
      return result;
    }
    return null;
  }

  async signIn(username, password): Promise<Record<string, any>> {
    let isOk = false;

    await validate({ username, password }).then((errors) => {
      if (errors.length > 0) {
        this.logger.debug(`${errors}`, AuthService.name);
      } else {
        isOk = true;
      }
    });

    if (isOk) {
      const userDetails = await this.usersService.findOne(username);

      if (userDetails == null) {
        return { status: 401, msg: { msg: 'Invalid credentials' } };
      }

      const isValid = bcrypt.compareSync(password, userDetails.password);
      if (isValid) {
        const payload = { username };

        return {
          status: 200,
          access_token: await this.jwtService.signAsync(payload, {
            expiresIn: '2h',
            secret: jwtConstants.secret,
          }),
        };
      } else {
        return { status: 401, msg: { msg: 'Invalid credentials' } };
      }
    } else {
      return { status: 400, msg: { msg: 'Invalid fields.' } };
    }
  }

  async createUser(body: User): Promise<Record<string, any>> {
    return this.usersService.create({
      ...body,
      password: bcrypt.hashSync(body.password, 10),
    });
  }
}
