import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, BookDocument } from 'schema/Book';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BookService {
constructor(@InjectModel(Book.name)private bookModel:Model<BookDocument>){

}


  create(createBookDto: CreateBookDto):Promise<Book> {
    const model=new this.bookModel();
    model.title=createBookDto.title;
    model.author=createBookDto.author;
    model.published=createBookDto.published;
    return model.save();
  }

  findAll():Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  findOne(id:string) {
    return this.bookModel.findById(id).exec();
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.bookModel.updateOne({_id:id}, {
      title:updateBookDto.title,
      author:updateBookDto.author,
      published:updateBookDto.published
    }).exec();
  }

  remove(id: string) {
    return this.bookModel.deleteOne({_id:id}).exec();
  }
}
