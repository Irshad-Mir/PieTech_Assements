import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
    @Prop({ required: true,  })
    name: string;

    @Prop({ required: true,  })
    username: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop()
     address:string;

@Prop()
 phone: String;
 @Prop()
 website: String;
 @Prop()
 company:string;
     }
    

export const UserSchema = SchemaFactory.createForClass(User);






