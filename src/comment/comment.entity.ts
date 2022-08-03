import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


import Document from "mongoose";
export type CommentDocument = Comment & Document



@Schema()
export class Comment {
    
    
    
    @Prop()
    postId:number;

    
    @Prop()
    name: string;

    @Prop()
    email: string;
   
   @Prop()
   body: string;
 

}





export const CommentSchema = SchemaFactory.createForClass(Comment);

















