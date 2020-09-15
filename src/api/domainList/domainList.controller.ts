import { Controller, Get, Param, Post, Body } from '@nestjs/common';
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
    @Body('domainList') domainList: []) {

    const domainListByPartnerId = await this.domainListService.findById(partnerId)
    if (domainListByPartnerId.length > 0) {
      const newDomain = { partnerId, domainList }
      return []
    } else {
      return await this.domainListService.create({ partnerId, domainList })
    }

  }
}