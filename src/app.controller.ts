

import {Body, Controller, Delete, Get, Param, Post, Put, } from '@nestjs/common';
  
type input = {
  userId:number
  title: string;
  body: string;
  id: number;
};

@Controller('crud')
export class AppController {
  inputs: input[] = [];

  @Get()
  getAllinput(): input[] {
    return this.inputs;
  }

  @Get('/:id')
  getInputById(@Param('id') id: number): input {
    const inputIndex = this.inputs.findIndex((input) => input.id === Number(id));
    return this.inputs[inputIndex];
  }

  @Post()
  createinput(@Body() {userId, title, body }: input) {
    const randomId = Math.floor(Math.random() *99);
 
    const input = {userId, id: randomId , title,  body, };
    this.inputs.push(input);
    return input;
  }


  @Put('/:id')
  updateinput(@Param('id') id: number, @Body() newInput: Partial<input>): input {
    const inputIndex = this.inputs.findIndex((input) => input.id === Number(id));
    this.inputs[inputIndex] = { ...this.inputs[inputIndex], ...newInput };
    return this.inputs[inputIndex];
  }

  @Delete('/:id')
  deletenote(@Param('id') id: number): boolean {
    const inputIndex = this.inputs.findIndex((input) => input.id === Number(id));
    if (inputIndex === -1) return false;
    delete this.inputs[inputIndex];
    return true;
  }
}