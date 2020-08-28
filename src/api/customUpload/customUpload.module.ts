import { Module } from '@nestjs/common';
import { CustomUploadController } from './customUpload.controller';
import { CustomUploadService } from './customUpload.service';

@Module({

  controllers: [CustomUploadController],
  providers: [CustomUploadService],
})
export class CustomUploadModule { }
