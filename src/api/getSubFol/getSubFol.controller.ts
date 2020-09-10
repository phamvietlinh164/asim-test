import { Controller, Get, Param } from '@nestjs/common';
const fs = require('fs');
// const { lstatSync, readdirSync } = require('fs')
// const { join } = require('path')
const glob = require('glob');

// const isDirectory = source => lstatSync(source).isDirectory()

var getAllDirectories = function (src, callback) {
  glob(src + '/**/*', callback);
};


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
              resolve([])
              return
            }
            if (stats.isDirectory()) {
              resolve(item)
            } else {
              resolve();
            }
          })
        });
      };


      const getListFile = new Promise((resolve, reject) => {
        getAllDirectories(str, function (err, res) {
          if (err) {
            console.log('Error', err);
          } else {
            const list = res.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
            var actions = list.map(checkStat)
            Promise.all(actions).then(val => {
              const result = val.filter(value => value);
              fs.stat(str, (err, stats) => {
                if (err) {
                  // console.log(err);
                  resolve([])
                  return
                }
                if (stats.isDirectory()) {
                  result.push(str)
                  resolve(result)
                } else {
                  resolve(result)
                }
              })
            })
          }
        });
      })

      return getListFile
    } catch (err) {
      return []
    }
  }


}