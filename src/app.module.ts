import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [UsersModule, BookModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
