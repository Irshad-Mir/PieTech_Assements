import { Injectable } from '@nestjs/common';
import { ClientSession, Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/entites/user.entity';
import { UserRepository } from '../../repositories/user.repository';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UserService {
    userModel: any;
    
    constructor(private readonly userRepository: UserRepository) {}

    async createUser(createUserDto: CreateUserDto, session: ClientSession) {
        const createdUser = await this.userRepository.createUser(createUserDto, session);
        return createdUser;
    }

    async getUserById(id: MongooseSchema.Types.ObjectId) {
        return await this.userRepository.getUserById(id);
    }
   async findAll():Promise<User[]> {
        return await this.userModel.find().exec();
      }
    
    
}
