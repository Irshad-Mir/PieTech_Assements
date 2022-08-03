import {Body, Controller, Get, Post} from '@nestjs/common';
import { CreateCommentDto } from './comment.dto';
import {CommentService} from "./comment.service";


@Controller('comment')
export class CommentController {
   

    constructor(private readonly commentService: CommentService) {
    }

 //...........Create comments..........//

    @Post("create")
    create(@Body() createCommentDto: CreateCommentDto) {
      return this.commentService.create(createCommentDto);
    }

    //........... List of  Comment..........//
  
    @Get("fetch")
    findAll() {
      return this.commentService.findAll();
    }
}