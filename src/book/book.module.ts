import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { BookController } from './book.controller';
import { BookMiddleware } from './book.middleware';

@Module({
  controllers: [BookController],
  providers: []
})
export class BookModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(BookMiddleware).forRoutes('books')
   
  }
}
