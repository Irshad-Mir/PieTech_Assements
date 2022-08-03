import {Body, Controller, Get, Post} from '@nestjs/common';
import { CreatePostDto } from './post.dto';
import {PostService} from "./post.service";


@Controller('post')
export class PostController {

    constructor(private readonly postService: PostService) {
    }


 //........... create Posts..........//
    @Post("create")
    create(@Body() createPostDto: CreatePostDto) {
      return this.postService.create(createPostDto);
    }
  
 
 //........... List of  Posts..........//
    @Get("fetch")
    findAll() {
      return this.postService.findAll();
    }
}