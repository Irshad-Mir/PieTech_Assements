import { BadRequestException, Body, Controller, Get, HttpStatus, Post,  Res } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Response } from 'express';
import { Connection, Schema as MongooseSchema } from 'mongoose';

import { CreatePostDto } from './dto/createPost.dto';

import { PostService } from './post.service';

@Controller('post')
export class PostController {
   
    constructor(@InjectConnection() private readonly mongoConnection: Connection, private postService: PostService) {}

    @Post('/createPost')
    async createPost(@Body() createPostDto: CreatePostDto, @Res() res: Response) {
        const session = await this.mongoConnection.startSession();
        session.startTransaction();
        try {
        
            const newPost: any = await this.postService.createPost(createPostDto,  );
            await session.commitTransaction();
            console.log(newPost)
            return res.status(HttpStatus.OK).send(newPost);
        } catch (error) {
            await session.abortTransaction();
            throw new BadRequestException(error);
        } finally {
            session.endSession();
        }
    }
       
        
    
    @Get("fetch")
    findAll() {
      return this.postService.findAll();
    }

}