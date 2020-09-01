import { Module } from '@nestjs/common';
import { ListFileInJsonController } from './listFileInJson.controller';
import { ListFileInJsonService } from './listFileInJson.service';

@Module({

  controllers: [ListFileInJsonController],
  providers: [ListFileInJsonService],
})
export class ListFileInJsonModule { }
