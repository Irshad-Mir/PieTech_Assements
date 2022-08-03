import {Body, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Comment, CommentDocument} from "./comment.entity";
import {Model} from "mongoose";
import { CreateCommentDto } from './comment.dto';

@Injectable()
export class CommentService {
    PostModel: any;
    constructor(@InjectModel(Comment.name)private commentModel:Model<CommentDocument>){

    }
    
    
      async create(createCommentDto: CreateCommentDto):Promise<Comment> {
        
        let newModel= new this.commentModel<Comment>(createCommentDto);

        return await newModel.save() // save in mongodb
        
        
      }
    
      findAll():Promise<Comment[]> {
        return this.commentModel.find().exec();
      }
    
    
}