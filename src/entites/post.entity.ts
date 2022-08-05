import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from './user.entity';

export type PostDocument = Post & Document



@Schema()
export class Post extends Document {

     @Prop( {type: MongooseSchema.Types.ObjectId,  ref: User.name })
    userId:MongooseSchema.Types.ObjectId;static _id: any;
;

    
    @Prop()
    title: string;

    
   
   @Prop()
   body: string;
 

}





export const PostSchema = SchemaFactory.createForClass(Post);


