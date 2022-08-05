import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
//import { UserModule } from '../user/user.module';

import { Post, PostSchema } from '../../entites/post.entity';
import { PostRepository } from '../../repositories/post.repository';

import { UserModule } from '../user/user.module';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
    imports: [UserModule,  MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }])],
    controllers: [PostController],
    providers: [PostService, PostRepository],
    exports: [PostService, PostRepository],
})
export class PostModule {}