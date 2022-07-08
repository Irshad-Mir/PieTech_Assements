import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://users-open-to-all:hiPassword123@cluster0.uh35t.mongodb.net/irshad-mir-db?retryWrites=true&w=majority'), TodoModule],
   
        
      
    
  controllers: [],
  providers: [],
})
export class AppModule {}



