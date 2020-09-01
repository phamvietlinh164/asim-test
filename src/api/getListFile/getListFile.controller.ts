import { Controller, Get, Param, UseInterceptors, Bind, UploadedFiles } from '@nestjs/common';
import { rejects } from 'assert';
// import { UrlConfigService } from "../../config/config.url.service"
// import { GetListFileService } from "./getListFile.service";
// import { rejects } from 'assert';
// import { FileFieldsInterceptor } from '@nestjs/platform-express';
// import { HttpException } from '@nestjs/common';


const fs = require('fs');
// const path = require('path');
// const finder = require('findit');
// console.log(process.env)


@Controller('getListFile')
export class GetListFileController {
  @Get(':subfol')

  getListFile(@Param('subfol') subfol: string) {

    try {

      const str = subfol.replace(/-/g, "/");
      // console.log(str)
      const file = fs.readdirSync(`./${str}`)
      if (!Array.isArray(file)) return []


      // Remove the hidden file like .DS_Store
      const list = file.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item))
      const checkStat = (item) => { // sample async action
        return new Promise((resolve, reject) => {
          fs.stat(`./${str}/${item}`, (err, stats) => {
            if (err) return
            if (stats.isFile()) {
              // arr.push(item);
              resolve(item)
            } else {
              // reject('Fail!');
              resolve()
            }

          })
        });
      };

      var actions = list.map(checkStat)

      // console.log(actions)

      // results.then(data => )

      return new Promise((resolve, rejects) => {
        Promise.all(actions).then(value => {
          const result = value.filter(ele => ele);
          resolve(result)
        }).catch(err => {
          rejects()
        })
      })
      // const result = list.filter(item => )

    } catch (err) {
      return []
    }


    // const str = subfol.replace(/-/g, "/");
    // const file = fs.readdirSync(`./${str}`);
    // const checkStat = (item) => { // sample async action
    //   return new Promise((resolve, reject) => {
    //     fs.stat(`./${str}/${item}`, (err, stats) => {
    //       if (err) return
    //       if (stats.isFile()) {
    //         // arr.push(item);
    //         resolve(item)
    //       } else {
    //         // reject('Fail!');
    //         resolve()
    //       }

    //     })
    //   });
    // };

    // var actions = file.map(checkStat)
    // var results = Promise.all(actions);
    // console.log(actions)

    // results.then(data => )

    // return results



    // const result = new Promise((resolve, reject) => {
    //   file.forEach((item, index) => {
    //     fs.stat(`./${str}/${item}`, (err, stats) => {
    //       if (err) return
    //       if (stats.isDirectory()) {
    //         arr.push(item)
    //       }

    //     })

    //   })

    //   fs.stat(str, (err, stats) => {
    //     if (stats.isDirectory()) {
    //       resolve(file)
    //     } else {
    //       reject('abc')
    //     }


    //   })
    // })



  }


}