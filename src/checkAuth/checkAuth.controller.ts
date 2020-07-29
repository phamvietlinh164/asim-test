import { Controller, Post, Body } from '@nestjs/common';
import { CheckAuthService } from "./checkAuth.service";

@Controller('checkAuth')
export class CheckAuthController {

  constructor(private readonly checkAuthService: CheckAuthService) { }

  @Post()
  checkAuth(@Body('token') token: string) {
    return this.checkAuthService.checkAuth(token)
  }
}
