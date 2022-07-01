import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/types/product';

@Injectable()
export class ProductService {
    [x: string]: any;

    constructor(@InjectModel('Product') productModel:Model<Product>){}

    async findAll():Promise<Product[]>{
        return await this.productModel.find().populate('owner');

    }
    async findOne(id:string):Promise<Product>{
        return await this.productModel.findById(id).populate
        ('owner');
    }

    async create(productDto:any): Promise<Product> {
        const product=await this.productModel.create(productDto);
        await product.save();
        return product.populate('owner');
    }

    async update(id:string, productDto:any): Promise<Product>{
        const product=await this.productModel.findById(id);
        await product.update(productDto)
        return product.populate('owner');
    }

    async delete(id:string, productDto:any): Promise<Product>{
        const product=await this.productModel.findById(id);
        await product.remove(productDto)
        return product.populate('owner');
    }

}
