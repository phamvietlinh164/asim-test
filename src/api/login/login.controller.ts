import { Controller, Post, Param, Body } from '@nestjs/common';
import { LoginService } from "./login.service";

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) { }

  @Post()
  Login(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    return this.loginService.getToken(username, password)
  }
}
