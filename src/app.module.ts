import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import{ConfigModule, ConfigService} from '@nestjs/config'
import { BookModule } from './book/book.module';



@Module({
 imports:[
  ConfigModule.forRoot({
    isGlobal:true,
    envFilePath:[".local.env"]
  }),
  MongooseModule.forRootAsync({imports:[ConfigModule], useFactory:(configService:ConfigService)=>({uri:configService.get("MONGO_URI")}),
   inject: [ConfigService]}),
  BookModule
 
 ],
   controllers: [],
   providers: [],

 })
export class AppModule {}

