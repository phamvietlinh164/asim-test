import { Module } from '@nestjs/common';
import { CheckAuthController } from "./checkAuth.controller";
import { CheckAuthService } from './checkAuth.service';

@Module({
  controllers: [CheckAuthController],
  providers: [CheckAuthService]
})
export class CheckAuthModule { }