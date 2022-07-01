import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class SellerGuard implements CanActivate{

    constructor(){}
    canActivate(context: ExecutionContext){

   const request=context.switchToHttp().getResponse();
   const user=request.user;
   if(user && user.seller){
return true
   }
   throw new HttpException('Unauthorised access', HttpStatus.UNAUTHORIZED);
    }
}