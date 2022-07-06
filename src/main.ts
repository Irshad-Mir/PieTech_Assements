import { NestFactory } from '@nestjs/core';
import { NextFunction } from 'express';

import { AppModule } from './app.module';


function globalMiddlewareOne(req:Request, res:Response, next:NextFunction){
  console.log("This is Global Middleare1")
  next()
}
function globalMiddlewareTwo(req:Request, res:Response, next:NextFunction){
  console.log("This is Global Middleare2")
  next()
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddlewareOne);
  app.use(globalMiddlewareTwo);
  await app.listen(3000);
}
bootstrap();
