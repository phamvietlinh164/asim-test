import { Controller, Post, UseInterceptors, Bind, UploadedFiles, Req } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { HttpException, HttpStatus } from '@nestjs/common';
// const HttpException = require('h')
// import { multer } from 'multer';
const multer = require('multer');
const mkdirp = require('mkdirp');
const jwt = require('jsonwebtoken');
const { jwtSecretKey } = require('../login/login.service')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = `client/upload/hospitals/${req.headers.hospital}`;
    mkdirp(dir, err => cb(err, dir))
  },
  filename: function (req, file, cb) {
    // const type = file.originalname.split(".")[1];

    if (file.fieldname === 'image' && file.mimetype === 'image/png') {
      cb(null, `${req.headers.name}.png`)
    } else if (file.fieldname === 'content' && file.mimetype === 'application/json') {
      cb(null, `${req.headers.name}.json`)
    } else if (file.fieldname === 'logo' && file.mimetype === 'image/svg+xml') {
      cb(null, `${req.headers.name}.svg`)
    }

  }
})

const fileFilter = (req, file, cb) => {
  // reject the file

  try {
    var decoded = jwt.verify(req.headers.token, jwtSecretKey);
  } catch (err) {
    console.log(err)
    // return cb(new Error(err))
    return cb(new HttpException ("Unauthenticated!", 401), false)
  }


  if (file.fieldname === 'image' && file.mimetype === 'image/png') {
    cb(null, true)
  } else if (file.fieldname === 'content' && file.mimetype === 'application/json') {
    cb(null, true)
  } else if (file.fieldname === 'logo' && file.mimetype === 'image/svg+xml') {
    cb(null, true)
  } else {
    cb(new Error("Can not up load!"))
  }
}

const options = {
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter
}

@Controller()
export class UploadController {
  @Post('upload')
  @Bind(UploadedFiles())
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'image', maxCount: 1 },
    { name: 'content', maxCount: 1 },
    { name: 'logo', maxCount: 1 },
  ], options))

  uploadFile(files) {
    console.log(files)
    return 'Upload successfully!';
  }

}
