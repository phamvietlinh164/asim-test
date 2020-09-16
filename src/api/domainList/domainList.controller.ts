import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { DomainListService } from './domainList.service';


@Controller('domainList')
export class DomainListController {

  constructor(private readonly domainListService: DomainListService) { }

  @Get()
  async domainList() {
    return await this.domainListService.findAll()
  }

  @Get(':partnerId')
  async domainListByPartnerId(@Param('partnerId') partnerId: string) {
    return await this.domainListService.findById(partnerId)
  }

  @Post()
  async create(
    @Body('partnerId') partnerId: string,
    @Body('enviroment') enviroment: string,
    @Body('domain') domain: string) {



    return await this.domainListService.create({ partnerId, enviroment, domain })

  }

  @Put()
  async edit(
    @Body('_id') _id: string,
    @Body('enviroment') enviroment: string,
    @Body('domain') domain: string) {
    return await this.domainListService.update({ _id, enviroment, domain })
  }

  @Delete(':_id')
  async delete(
    @Param('_id') _id: string) {
    return await this.domainListService.delete(_id)
  }
}