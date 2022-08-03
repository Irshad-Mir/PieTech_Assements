import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentController } from './comment.controller';
import {Comment, CommentSchema } from './comment.entity';

import { CommentService } from './comment.service';

@Module({
  imports:[MongooseModule.forFeature([{name:Comment.name, schema:CommentSchema}])],
  controllers: [CommentController],
  providers: [CommentService]
})
export class CommentModule {}