import {Body, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Post, PostDocument} from "./post.entity";
import {Model} from "mongoose";
import { CreatePostDto } from './post.dto';

@Injectable()
export class PostService {
    PostModel: any;
    constructor(@InjectModel(Post.name)private postModel:Model<PostDocument>){

    }
    
    
      async create(createPostDto: CreatePostDto):Promise<Post> {
        
        let newModel= new this.postModel<Post>(createPostDto);

        return await newModel.save()  // save in mongodb
        
        
      }
    
      findAll():Promise<Post[]> {
        return this.postModel.find().exec();
      }
    
    
}