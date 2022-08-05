
import { InjectModel } from '@nestjs/mongoose';
import {  Model, Schema as MongooseSchema } from 'mongoose';

import { Comment } from '../entites/comment.entity';
import { CreateCommentDto } from '../modules/comment/dto/createComment.dto';


export class CommentRepository {
  
   
    constructor(@InjectModel(Comment.name) private readonly commentModel: Model<Comment>) {}

    async createComment(createCommentDto: CreateCommentDto,) {
        let comment = new this.commentModel({
            postId: createCommentDto.postId,
            name: createCommentDto.name,
            email: createCommentDto.email,
            body: createCommentDto.body,
            
        });
      

        return comment;
    }

}