import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserModule } from 'src/modules/user/user.module';

import { AuthSerializer } from './auth.serializer';
import { AuthService } from './auth.service';
import { LocalStrategy, JwtStrategy, JwtVerifyStrategy } from './strategies';

@Module({
  imports: [UserModule, JwtModule],
  providers: [
    AuthService,
    AuthSerializer,
    LocalStrategy,
    JwtStrategy,
    JwtVerifyStrategy,
    ConfigService,
    JwtService,
  ],
  exports: [AuthService],
})
export class AuthModule {}
