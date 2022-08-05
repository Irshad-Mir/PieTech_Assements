import { Prop, Schema, SchemaFactory,  } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Post } from './post.entity';

export type CommentDocument = Comment & Document



@Schema()
export class Comment extends Document{
    
    
    
    @Prop({ type: MongooseSchema.Types.ObjectId, required: false, ref: Post.name })
    postId:MongooseSchema.Types.ObjectId;;

    
    @Prop()
    name: string;

    @Prop()
    email: string;
   
   @Prop()
   body: string;
 

}





export const CommentSchema = SchemaFactory.createForClass(Comment);

















