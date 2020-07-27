import { Injectable } from '@nestjs/common';

@Injectable()
export class ContentService {
  getContent(partnerId: string) {

    try {
      const content = require(`../../client/upload/hospitals/${partnerId}/content.js`);
      return content
    } catch (err) {
      return null
    }


  }
}
