import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';

import { ConfigModule } from './config/config.module';
import { UploadModule } from './api/upload/upload.module';
import { join } from 'path';
import { LoginModule } from './api/login/login.module';
import { CheckAuthModule } from './api/checkAuth/checkAuth.module';
import { CustomUploadModule } from './api/customUpload/customUpload.module';
import { GetListFileModule } from './api/getListFile/getListFile.module';
import { ContentModule } from './api/content/content.module';

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
    UploadModule,
    CustomUploadModule,
    LoginModule,
    CheckAuthModule,
    GetListFileModule,
    ContentModule,

  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
