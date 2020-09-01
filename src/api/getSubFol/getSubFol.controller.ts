import { Controller, Get, Param } from '@nestjs/common';
const fs = require('fs');
const { lstatSync, readdirSync } = require('fs')
const { join } = require('path')
const glob = require('glob')

const isDirectory = source => lstatSync(source).isDirectory()
// const getDirectories = source =>
//   readdirSync(source).map(name => join(source, name)).filter(isDirectory)

var getAllDirectories = function (src, callback) {
  glob(src + '/**/*', callback);
};

// console.log(getDirectories('client/upload/hospitals/leloi'))







@Controller('getSubFol')
export class GetSubFolController {
  @Get(':subfol')


  getListFile(@Param('subfol') subfol: string) {
    try {

      const str = subfol.replace(/-/g, "/");
      const checkStat = (item) => { // sample async action
        return new Promise((resolve, reject) => {
          fs.stat(`./${item}`, (err, stats) => {
            if (err) {
              console.log(err)
              return
            }
            if (stats.isDirectory()) {

              resolve(item)
            } else {
              resolve()
            }

          })
        });
      };



      // const file = fs.readdirSync(`./${str}`)
      // if (!Array.isArray(file)) return []


      // Remove the hidden file like .DS_Store
      // const list = file.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item))
      // const checkStat = (item) => { // sample async action
      //   return new Promise((resolve, reject) => {
      //     fs.stat(`./${str}/${item}`, (err, stats) => {
      //       if (err) return
      //       if (stats.isDirectory()) {

      //         resolve(item)
      //       } else {
      //         resolve()
      //       }

      //     })
      //   });
      // };





      return new Promise((resolve, reject) => {
        getAllDirectories(str, function (err, res) {
          if (err) {
            console.log('Error', err);
          } else {
            // console.log(res);
            // const listDir = res.map()
            // resolve(res);
            const list = res.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));

            var actions = list.map(checkStat)
            // console.log(list)
            Promise.all(actions).then(val => {
              // console.log(val);
              const result = val.filter(value => value);
              result.push(str)
              resolve(result)
            });
            // fs.stat(`./${str}/${item}`, (err, stats) => {

            // })
          }
        });
      })


    } catch (err) {
      return []
    }
  }


}