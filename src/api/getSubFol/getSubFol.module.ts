import { Module } from '@nestjs/common';
import { GetSubFolController } from './getSubFol.controller';
import { GetSubFolService } from './getSubFol.service';

@Module({

  controllers: [GetSubFolController],
  providers: [GetSubFolService],
})
export class GetSubFolModule { }
