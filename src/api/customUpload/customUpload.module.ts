import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CustomUploadController } from './customUpload.controller';
import { CustomUploadService } from './customUpload.service';
import { Authenticate } from '../../middleware/authenticate/authenticate';


@Module({

  controllers: [CustomUploadController],
  providers: [CustomUploadService],
})
export class CustomUploadModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(Authenticate)
      .forRoutes('customUpload');
  }
}
