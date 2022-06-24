import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { CONSTANTS } from './constant';
import { RoleGuard } from './role.guard';


@Controller("app")
export class AppController {
  constructor(private readonly authService:AuthService) {}
 
// Authentication And Authorisation


  @Post("/login")
  @UseGuards(AuthGuard("local"))
  login(@Request()req): string {
    return this.authService.generateToken(req.user)
  }
@Get("/software-developer")
@UseGuards(AuthGuard("jwt"), new RoleGuard(CONSTANTS.ROLES.SOFTWARE_DEVELOPER))
softwareDeveloperData(@Request()req):string{
  return req.user;
}

@Get("/web-developer")
@UseGuards(AuthGuard("jwt"), new RoleGuard(CONSTANTS.ROLES.WEB_DEVELOPER))
webDeveloperData(@Request()req):string{
  return "This is private data for web devloper" + JSON.stringify(req.user);
}

}
