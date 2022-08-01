import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import { randomInt } from "crypto";
import { Factory } from "nestjs-seeder";
import Document from "mongoose";
export type ProductDocument = Product & Document

@Schema()
export class Product{



   
    @Factory(faker=>faker.lorem.words(2))
    @Prop()
    title:string;

    @Factory(faker=>faker.lorem.words(10))

    @Prop()
    description:string;

    @Factory(faker=>faker.image.imageUrl())

    @Prop()
    image:string;

    @Factory(faker=>randomInt(10, 100))

    @Prop()
    price:number;

}

export const ProductSchema=SchemaFactory.createForClass(Product)