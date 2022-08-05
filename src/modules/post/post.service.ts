import { Injectable } from '@nestjs/common';
import { Schema } from 'mongoose';
import { Post } from 'src/entites/post.entity';

import { PostRepository } from '../../repositories/post.repository';
import { UserService } from '../user/user.service';
import { CreatePostDto } from './dto/createPost.dto';


@Injectable()
export class PostService {
    getPostById(postId: Schema.Types.ObjectId): any {
        throw new Error('Method not implemented.');
    }
    postModel: any;
    constructor(private postRepository: PostRepository, private readonly userService: UserService,) {}

    async createPost(createPostDto: CreatePostDto, ) {
        const { userId, title, body} = createPostDto;
        //console.log(createPostDto)

        const getUser: any = await this.userService.getUserById(userId);
        //console.log(userId)

       

        
        const createdpost = await this.postRepository.createPost(createPostDto,);
        

       
       console.log(createdpost)
        

        return createdpost;
    }

    async findAll():Promise<Post[]> {
        return await this.postModel.find().exec();
      }
}