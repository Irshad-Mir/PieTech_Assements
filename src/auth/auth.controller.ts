import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SellerGuard } from 'src/guards/seller.guard';
import { UserService } from 'src/shared/user/user.service';
import { User } from 'src/utilities/user.decorator';
import { LoginDto, RegisterDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private userService:UserService, private authService:AuthService){}

    @Get()
    @UseGuards(AuthGuard('jwt'), SellerGuard)
   async findAll(@User()user:any){
    console.log(user)

        return await this.userService.findAll();
    }

    @Post('login')
     async login(@Body() userDto:LoginDto){

        const user= await this.userService.findByLogin(userDto);
        const payload={
            username:user.username,
            seller:user.seller
        }
        const token =await this.authService.signPayload(payload);
        return{user, token};
    }

    @Post('register')
    async register(@Body() userDto:RegisterDto){

     const user=await this.userService.create(userDto);
     const payload={
        username:user.username,
        seller:user.seller
    }
    const token =await this.authService.signPayload(payload);
    return{user, token};
    }
}
