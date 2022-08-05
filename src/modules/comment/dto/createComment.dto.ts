
import { Schema as MongooseSchema } from 'mongoose';

export class CreateCommentDto {
    postId:MongooseSchema.Types.ObjectId;
    name:string;
    email:string;
    body:string;
    
    }