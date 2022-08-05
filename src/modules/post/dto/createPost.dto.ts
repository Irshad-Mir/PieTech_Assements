import { Schema as MongooseSchema } from 'mongoose';

export class CreatePostDto {
    userId:MongooseSchema.Types.ObjectId;
    
;
    title:string;
    body:string;
    
    
    }