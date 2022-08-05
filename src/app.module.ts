import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentModule } from './modules/comment/comment.module';
//import { PostModule } from './post/post.module';
import { PostModule } from './modules/post/post.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://users-open-to-all:hiPassword123@cluster0.uh35t.mongodb.net/irshad_DB?retryWrites=true&w=majority', {
  autoCreate:true

  }), PostModule, UserModule, CommentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
