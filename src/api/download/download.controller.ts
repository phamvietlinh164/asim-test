import { Controller, Get, Param, Res, UseInterceptors, Bind, UploadedFiles } from '@nestjs/common';
// import { UrlConfigService } from "../../config/config.url.service"
// import { GetListFileService } from "./getListFile.service";
// import { rejects } from 'assert';
// import { FileFieldsInterceptor } from '@nestjs/platform-express';
// import { HttpException } from '@nestjs/common';

const fs = require('fs')



@Controller('download')
export class DownloadController {
  @Get(':filePath')

  download(@Res() res, @Param('filePath') filePath: string) {

    // console.log(filePath)

    const path = filePath.replace(/-/g, "/");

    // const down

    const download = new Promise((resolve, reject) => {
      fs.access(path, fs.F_OK, (err) => {
        if (err) {
          // console.error(err)
          return reject(err)
        }

        //file exists
        res.download(path)
        return resolve()
      })
    })

    return download




  }


}