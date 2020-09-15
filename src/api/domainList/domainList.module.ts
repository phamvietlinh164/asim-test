import { Module } from '@nestjs/common';
import { DomainListController } from './domainList.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DomainListService } from './domainList.service';
import { StaticContent, StaticContentSchema } from '../../mongoSchema/StaticContent.schema';
// console.log(StaticContent.name)

@Module({
  imports: [MongooseModule.forFeature([{ name: StaticContent.name, schema: StaticContentSchema }])],
  controllers: [DomainListController],
  providers: [DomainListService],
})
export class DomainListModule { }
