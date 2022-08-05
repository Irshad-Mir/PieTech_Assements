
import { InjectModel } from '@nestjs/mongoose';
import {  Model, Schema as MongooseSchema } from 'mongoose';


import { Post } from '../entites/post.entity';
import { CreatePostDto } from '../modules/post/dto/createPost.dto';


export class PostRepository {
   
   
    constructor(@InjectModel(Post.name) private readonly postModel: Model<Post>) {}

    async createPost(createPostDto: CreatePostDto, ) {
        let post = new this.postModel({
            userId: createPostDto.userId,
            title: createPostDto.title,
            body: createPostDto.body,
            
        });
      
       

        return post;
    }
}
