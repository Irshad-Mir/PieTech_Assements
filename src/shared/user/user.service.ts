import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { timeStamp } from 'console';
import { Model } from 'mongoose';
import { LoginDto, RegisterDto } from 'src/auth/auth.dto';
import { User } from 'src/types/user';
import * as bcrypt from 'bcrypt'


@Injectable()
export class UserService {
    [x: string]: any;
    constructor(@InjectModel('User')private userModel:Model<User>){}
    
    private sanitizUser(user:User){
        return user.depopulate('password')
    }

    async create(userDto:RegisterDto){
        const {username}=userDto;
        const user=await this.userModel.findOne({username});
        if(user){
            throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
        }
        const createdUser=new this.userModel(userDto)
        await createdUser.save();
        return this.sanitizUser(createdUser)
    }
    async findByLogin(userDto:LoginDto){
        const{username, password}=userDto
        const user=await this.userModel.findOne({username});
        if(!user){
            throw new HttpException('Invalid credentials',
            HttpStatus.UNAUTHORIZED);
        }

        if(await bcrypt.compare(password, user.password)){
            return this.sanitizUser(user);
        }else{
                throw new HttpException('Invalid Credentials', HttpStatus.UNAUTHORIZED)
            }
            
        }
        async findByPayload(payload:any){
            const {username}=payload;
            return await this.userModel.findOne({username});
        }
    }





