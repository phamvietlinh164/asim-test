import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';

import { ConfigModule } from './config/config.module';
import { UploadModule } from './api/upload/upload.module';
import { join } from 'path';
import { LoginModule } from './api/login/login.module';
import { CheckAuthModule } from './api/checkAuth/checkAuth.module';
import { CustomUploadModule } from './api/customUpload/customUpload.module';
import { GetListFileModule } from './api/getListFile/getListFile.module';
import { ContentModule } from './api/content/content.module';
import { GetSubFolModule } from './api/getSubFol/getSubFol.module';
import { DownloadModule } from './api/download/download.module';
import { ListFileInJsonModule } from './api/listFileInJson/listFileInJson.module';
import { DomainListModule } from './api/domainList/domainList.module';
import { Url } from './Url';

@Module({
  imports: [
    ConfigModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      serveRoot: '/static',
      exclude: ['/api*'],
      serveStaticOptions: {
        index: false,
      },
    }),
    MongooseModule.forRoot(Url[process.env.NODE_ENV].mongoUrl),

    UploadModule,
    CustomUploadModule,
    LoginModule,
    CheckAuthModule,
    GetListFileModule,
    ContentModule,
    GetSubFolModule,
    DownloadModule,
    ListFileInJsonModule,
    DomainListModule


  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
