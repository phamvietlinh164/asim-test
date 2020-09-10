import { Controller, Get, Param } from '@nestjs/common';
// import { rejects } from 'assert';
// import { UrlConfigService } from "../../config/config.url.service"
// import { GetListFileService } from "./getListFile.service";
// import { rejects } from 'assert';
// import { FileFieldsInterceptor } from '@nestjs/platform-express';
// import { HttpException } from '@nestjs/common';


const fs = require('fs');

@Controller('getListFile')
export class GetListFileController {
  @Get(':subfol')

  getListFile(@Param('subfol') subfol: string) {

    try {
      const str = subfol.replace(/-/g, "/");
      const file = fs.readdirSync(`./${str}`)
      if (!Array.isArray(file)) return []

      // Remove the hidden file like .DS_Store
      const list = file.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item))
      const checkStat = (item) => { // sample async action
        return new Promise((resolve, reject) => {
          fs.stat(`./${str}/${item}`, (err, stats) => {
            if (err) return
            if (stats.isFile()) {
              resolve(item)
            } else {
              resolve()
            }
          })
        });
      };

      var actions = list.map(checkStat)

      return new Promise((resolve, rejects) => {
        Promise.all(actions).then(value => {
          const result = value.filter(ele => ele);
          resolve(result)
        }).catch(err => {
          rejects()
        })
      })
    } catch (err) {
      return []
    }
  }
}