import { Module, NestModule, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { DomainListController } from './domainList.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DomainListService } from './domainList.service';
import { Authenticate } from '../../middleware/authenticate/authenticate';

import { StaticContent, StaticContentSchema } from '../../mongoSchema/StaticContent.schema';
// console.log(StaticContent.name)

@Module({
  imports: [MongooseModule.forFeature([{ name: StaticContent.name, schema: StaticContentSchema }])],
  controllers: [DomainListController],
  providers: [DomainListService],
})
export class DomainListModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(Authenticate)
      .exclude(
        { path: 'domainList', method: RequestMethod.GET },
        { path: 'domainList/:partnerId', method: RequestMethod.GET },
      )
      .forRoutes(DomainListController);
  }
}
