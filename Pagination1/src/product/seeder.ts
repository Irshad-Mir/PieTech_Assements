import { MongooseModule } from "@nestjs/mongoose";
import{seeder} from "nestjs-seeder"
import { Product, ProductSchema } from "./product.entity";
import { ProductModule } from "./product.module";
import { ProductSeeder } from "./product.seeder"



seeder({
    imports: [MongooseModule.forRoot('mongodb+srv://users-open-to-all:hiPassword123@cluster0.uh35t.mongodb.net/irshad-mir-db?retryWrites=true&w=majority'),
     MongooseModule.forFeature([{name:Product.name, schema:ProductSchema}]),
    ]
}).run([ProductSeeder]);