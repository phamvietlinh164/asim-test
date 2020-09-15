import { Controller, Get, Param } from '@nestjs/common';
import { Url } from "../../Url";
// import e = require('express');
// import { resolve } from 'dns';
// import { rejects } from 'assert';
const glob = require('glob');
const fs = require('fs');





const env = process.env.NODE_ENV || "development";
// console.log(`${url[env].staticUrl}/getListFile/client-upload-AppIcon-icons`)
var getAllDirectories = function (src, callback) {
  glob(src + '/**/*', callback);
};



@Controller('listFileInJson')
export class ListFileInJsonController {
  @Get(':subfol')


  listFileInJson(@Param('subfol') subfol: string) {

    // const getListFile = new Promise((resolve, reject) => {

    //   axios.get(`${url[env].staticUrl}/getSubFol/${subfol}`)
    //     .then(function (response) {
    //       const getListFile = (item) => {
    //         const str = item.replace(/\//g, "-")
    //         return new Promise((resolve2, reject2) => {
    //           axios.get(`${url[env].staticUrl}/getListFile/${str}`).then(response2 => {
    //             resolve2({ [str]: response2.data })
    //           }).catch(function (err) {
    //             // console.log('abcd')
    //             reject2()
    //           })
    //         });
    //       };
    //       var actions = response.data.map(getListFile);
    //       // console.log(actions)
    //       const result = Promise.all(actions)

    //       return result
    //     })
    //     .then(value => {
    //       // console.log(value);
    //       const result = []
    //       value.forEach((ele) => {
    //         // console.log(ele);
    //         for (var key in ele) {
    //           if (ele.hasOwnProperty(key)) {
    //             // console.log(key + " -> " + ele[key]);
    //             ele[key].forEach(ele2 => {
    //               // console.log(ele2);
    //               result.push({ [ele2.split(".")[0]]: `${url[env].staticUrl}/${key.replace(/-/g, "/")}/${ele2}` });

    //             })
    //           }
    //         }
    //         // console.log(result)
    //       }
    //       )

    //       resolve(result)
    //     })
    //     .catch(function (error) {
    //       reject()
    //     })


    // })

    try {

      const str = subfol.replace(/-/g, "/");
      const checkStatIsFile = (item) => { // sample async action
        return new Promise((resolve) => {
          fs.stat(`./${item}`, (err, stats) => {
            if (err) {
              console.log(err)
              resolve()
              return
            }
            if (stats.isFile()) {
              resolve(item)
            } else {
              resolve();
            }
          })
        });
      }

      const checkStatIsDirectory = (item) => { // sample async action
        return new Promise((resolve) => {
          fs.stat(`./${item}`, (err, stats) => {
            if (err) {
              console.log(err)
              resolve()
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

      const getListSubFol = new Promise((resolve) => {
        getAllDirectories(str, function (err, res) {
          if (err) {
            console.log('Error', err);
          } else {
            const listSubFol = res.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
            var actions = listSubFol.map(checkStatIsDirectory)
            Promise.all(actions).then(val => {
              const result = val.filter(value => value);
              fs.stat(str, (err, stats) => {
                if (err) {
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

      const result = new Promise((resolve, rejects) => {
        getListSubFol.then(val3 => {
          var arr = []
          if (Array.isArray(val3)) {
            val3.forEach(element => {
              var file = fs.readdirSync(element)
              if (!Array.isArray(file)) return []

              // Remove the hidden file like .DS_Store
              var listFile = file.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item))
              listFile.forEach(element2 => {
                arr.push(`${element}/${element2}`)
              })
            });

            var actions2 = arr.map(checkStatIsFile);

            Promise.all(actions2).then(value => {
              const result = value.filter(ele => ele);
              const arrResult = result.map(ele => {
                if (typeof (ele) === 'string') {
                  const key = ele.split('/').slice(-1)[0].split('.')[0];
                  return { [key]: ele }
                }

                return {}
              })
              const objResult = {};
              arrResult.forEach(element => {
                objResult[Object.keys(element)[0]] = `${Url[env].staticUrl}/${Object.values(element)[0]}`
              })
              resolve(objResult)
            }).catch(err => {
              rejects()
            })
          }
        })
      })
      return result
    } catch (err) {
      return []
    }
  }
}