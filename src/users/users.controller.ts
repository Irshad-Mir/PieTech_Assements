import { Controller, Get, Post, } from '@nestjs/common';


@Controller('users')
export class UsersController {
@Get()
  findAllUser():string{
    return 'This api will return all users';
  }
  @Post()
    AddUser():string{
      return 'This api will add users';
    }}

