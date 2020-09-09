import { Controller, Get, Param } from '@nestjs/common';
const axios = require('axios')
import { url } from "../../Url"



const env = process.env.NODE_ENV || "development";
console.log(`${url[env].staticUrl}/getListFile/client-upload-AppIcon-icons`)



@Controller('listFileInJson')
export class ListFileInJsonController {
  @Get(':subfol')


  listFileInJson(@Param('subfol') subfol: string) {

    const getListFile = new Promise((resolve, reject) => {

      axios.get(`${url[env].staticUrl}/getSubFol/${subfol}`)
        .then(function (response) {
          const getListFile = (item) => {
            const str = item.replace(/\//g, "-")
            return new Promise((resolve2, reject2) => {
              axios.get(`${url[env].staticUrl}/getListFile/${str}`).then(response2 => {
                resolve2({ [str]: response2.data })
              }).catch(function (err) {
                // console.log('abcd')
                reject2()
              })
            });
          };
          var actions = response.data.map(getListFile);
          // console.log(actions)
          const result = Promise.all(actions)

          return result

        })
        .then(value => {
          // console.log(value);
          const result = []
          value.forEach((ele) => {
            // console.log(ele);
            for (var key in ele) {
              if (ele.hasOwnProperty(key)) {
                // console.log(key + " -> " + ele[key]);
                ele[key].forEach(ele2 => {
                  // console.log(ele2);
                  result.push({ [ele2.split(".")[0]]: `${url[env].staticUrl}/${key.replace(/-/g, "/")}/${ele2}` });

                })
              }
            }
            // console.log(result)
          }
          )

          resolve(result)
        })
        .catch(function (error) {
          resolve(`${url[env].staticUrl}/getListFile/client-upload-AppIcon-icons`)
        })


    })
    return getListFile
  }




}