import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';

import { ConfigModule } from './config/config.module';
import { UploadModule } from './upload/upload.module';
import { ContentModule } from './content/content.module';
import { join } from 'path';
import { LoginModule } from './login/login.module';
import { CheckAuthModule } from './checkAuth/checkAuth.module';

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
    ContentModule,
    LoginModule,
    CheckAuthModule,

  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
