import { Module, Global, HttpModule } from '@nestjs/common';
import { UrlConfigService } from './config.url.service';
import { ConfigManagerModule } from '@nestjsplus/config';

@Global()
@Module({
  imports: [
    ConfigManagerModule.register({
      useEnv: {
        folder: 'config',
      },
      allowExtras: true,
    }),
    HttpModule,
  ],
  providers: [
    UrlConfigService,
  ],
  exports: [
    UrlConfigService,
  ],
})
export class ConfigModule { }
