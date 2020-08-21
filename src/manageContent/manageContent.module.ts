import { Module } from '@nestjs/common';
import { ManageContentController } from './manageContent.controller';
import { ManageContentService } from './manageContent.service';

@Module({

  controllers: [ManageContentController],
  providers: [ManageContentService],
})
export class ManageContentModule { }
