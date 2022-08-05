import { BadRequestException, Body, Controller, Get, HttpStatus, Post,  Res } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Response } from 'express';
import { Connection, Schema as MongooseSchema } from 'mongoose';

import { CreateCommentDto } from './dto/createComment.dto';

import { CommentService } from './comment.service';

@Controller('Comment')
export class CommentController {
   
    constructor(@InjectConnection() private readonly mongoConnection: Connection, private commentService: CommentService) {}

    @Post('/createComment')
    async createComment(@Body() createCommentDto: CreateCommentDto, @Res() res: Response) {
        const session = await this.mongoConnection.startSession();
        session.startTransaction();
        try {
            const newcomment: any = await this.commentService.createComment(createCommentDto);
            await session.commitTransaction();
            console.log(newcomment)
            return res.status(HttpStatus.OK).send(newcomment);
        } catch (error) {
            await session.abortTransaction();
            throw new BadRequestException(error);
        } finally {
            session.endSession();
        }
    }





    @Get("fetch")
    findAll() {
      return this.commentService.findAll();
    }
}