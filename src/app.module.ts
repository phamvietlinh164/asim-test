import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ClubModule } from './api/club/club.module';

import { ConfigModule } from './config/config.module';

import { Url } from './Url';
// console.log(Url[process.env.NODE_ENV].mongoUrl)

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRoot(Url[process.env.NODE_ENV].mongoUrl),
    ClubModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
