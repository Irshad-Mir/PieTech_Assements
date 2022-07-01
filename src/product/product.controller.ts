import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SellerGuard } from 'src/guards/seller.guard';
import { User } from 'src/utilities/user.decorator';
import { CreateProductDto, UpdateProductDto } from './product.dto';
import { ProductService } from './product.service';
import {User as UserDocument} from '../types/user'

@Controller('product')
export class ProductController {
    constructor(private productService:ProductService){}
    @Get()

   async  listAll(){
    return this.productService.findAll();
   }

    @Post()
@UseGuards(AuthGuard('jwt'), SellerGuard)
    async create(@Body()product: CreateProductDto, @User() user:UserDocument){
        return this.productService.create(product,)
    }

    @Get(':id')
   async read(@Param('id') id:string){
        return this.productService.findOne(id)
    }
    @Put(':id')
    @UseGuards(AuthGuard('jwt'), SellerGuard)
   async update(@Param('id')id:string, @Body() product:UpdateProductDto){
    return this.productService.update(id, product)
   }

    @Delete(':id')
    @UseGuards(AuthGuard('jwt'), SellerGuard)
   async  delete(@Param('id') id:string){
    return this.productService.remove(id)
   }
}


