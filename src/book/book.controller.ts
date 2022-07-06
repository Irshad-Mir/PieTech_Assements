import { Controller, Get, Post, } from '@nestjs/common';


@Controller('books')
export class BookController {
@Get()
  findAllUser():string{
    return 'This api will return all books';
  }
  @Post()
    AddUser():string{
      return 'This api will add books';
    }}
