import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import type { JwtPayload, Payload } from '../auth.interface';

@Injectable()
export class JwtVerifyStrategy extends PassportStrategy(
  Strategy,
  'jwt-verify',
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true, // Expiration of the access_token is not checked when processing the refresh_token.
      secretOrKey: 'JWT_MODULE_OPTIONS',
    });
  }

  public validate(payload: JwtPayload): Payload {
    return {
      userId: payload.sub,
      username: payload.username,
      roles: payload.roles,
    };
  }
}
