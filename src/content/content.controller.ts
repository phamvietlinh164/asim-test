import { Controller, Get, Param } from '@nestjs/common';
import { ContentService } from "./content.service";

@Controller('content')
export class ContentController {

  constructor(private readonly contentService: ContentService) { }


  @Get(':partnerId')
  getContent(@Param('partnerId') partnerId: string) {
    return this.contentService.getContent(partnerId)
  }

}
