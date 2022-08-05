import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';


import { Comment, CommentSchema } from '../../entites/comment.entity';
import { CommentRepository } from '../../repositories/comment.repository';
import { PostModule } from '../post/post.module';

import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';

@Module({
    imports: [PostModule,  MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }])],
    controllers: [CommentController],
    providers: [CommentService, CommentRepository],
    exports: [CommentService, CommentRepository],
})
export class CommentModule {}