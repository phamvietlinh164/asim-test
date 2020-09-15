import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
import { Authenticate } from '../../middleware/authenticate/authenticate';

@Module({

  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(Authenticate)
      .forRoutes('upload');
  }
}
