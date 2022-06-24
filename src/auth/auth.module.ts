import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

import { LocalStrategy } from './local.strategy';



@Module({
  imports: [PassportModule, UserModule,
     JwtModule.register({

        secret: "key",
        signOptions: { expiresIn: '360s' },

  })],
  controllers: [],
  providers: [LocalStrategy, JwtStrategy, AuthService],
  exports:[AuthService]
})
export class AuthModule {}
