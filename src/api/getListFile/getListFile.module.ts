import { Module } from '@nestjs/common';
import { GetListFileController } from './getListFile.controller';
import { GetListFileService } from './getListFile.service';

@Module({

  controllers: [GetListFileController],
  providers: [GetListFileService],
})
export class GetListFileModule { }
