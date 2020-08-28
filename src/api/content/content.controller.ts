import { Controller, Get, Param, Req, UseInterceptors, Bind, UploadedFiles } from '@nestjs/common';
import { jsonFormat } from '../../utils/func'
import { url } from "../../Url"
// import { FileFieldsInterceptor } from '@nestjs/platform-express';
// import { HttpException } from '@nestjs/common';
// import { reach } from 'joi';
const fs = require('fs');
// const os = require('os')
// const url2 = require('url');
// const url = require('Url')
// console.log(url)
// console.log(url2)

// const HttpException = require('h')
// import { multer } from 'multer';
// const multer = require('multer');
// const mkdirp = require('mkdirp');
// const jwt = require('jsonwebtoken');
// const sizeOf = require('image-size');
// const { jwtConfig } = require('../login/jwt-config');

const env = process.env.NODE_ENV || "development";

// console.log(url[env].staticUrl)

@Controller('content')
export class ContentController {

  @Get(':partnerId')
  getContent(@Param('partnerId') partnerId: string, @Req() request: any) {
    // fs.readFile('client/object.json',
    //   { encoding: 'utf8', flag: 'r' },
    //   function (err, data) {
    //     if (err)
    //       console.log(err);
    //     else
    //       console.log(data);
    //   });
    // console.log(url[env].staticUrl)



    try {
      var data = fs.readFileSync(
        // 'client/upload/hospitals/choray/example.json',
        `client/upload/hospitals/${partnerId}/content.json`,
        { encoding: 'utf8', flag: 'r' });
      const str = data.replace(/\/static\/upload\/hospitals/g, `${url[env].staticUrl}/static/upload/hospitals`)
      // console.log(str)

      return jsonFormat(str);
    } catch {
      return {};
    }



    // return 'abc';



    // console.log(JSON.parse(data));


  }
}
