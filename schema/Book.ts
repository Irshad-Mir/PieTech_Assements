import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type BookDocument=Book & Document;

@Schema()
export class Book {

    @Prop()
    title: string;

    @Prop()

    author: string;

    @Prop()

    published: number;
}
export const BookSchema=SchemaFactory.createForClass(Book)