import { Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { UserService } from 'src/shared/user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService:UserService){}

async signPayload(payload:any){
    return sign(payload, 'pietech', {expiresIn:'24h'});
}
    async validateUser(payload:any){
        return await this.userService.findByPayload(payload);
    }
}
