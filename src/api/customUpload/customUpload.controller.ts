import { Controller, Post, UseInterceptors, Bind, UploadedFiles } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
// import { HttpException } from '@nestjs/common';
// import { reach } from 'joi';

// const HttpException = require('h')
// import { multer } from 'multer';
const multer = require('multer');
const mkdirp = require('mkdirp');
// const jwt = require('jsonwebtoken');
// const sizeOf = require('image-size');
// const { jwtConfig } = require('../login/jwt-config');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const string = `${req.headers.subfol}`;

    const dir = `client/upload/${string}`;
    mkdirp(dir, err => cb(err, dir))
  },
  filename: function (req, file, cb) {

    if (req.headers.name === 'undefined') {
      // console.log(req.headers.name)
      cb(null, file.originalname)
    } else {
      cb(null, req.headers.name)
    }

  }
})

const fileFilter = (req, file, cb) => {
  // reject the file
  // try {
  //   const decoded = jwt.verify(req.headers.token, jwtConfig.jwtSecretKey);
  //   if (decoded.username !== jwtConfig.username || decoded.password !== jwtConfig.password) {
  //     throw new Error('Wrong username or password!')
  //   }
  // } catch (err) {
  //   return cb(new HttpException('Unauthenticated!', 401), false)
  // }

  if (file.fieldname === 'customUpload' && (file.mimetype === "image/png" || file.mimetype === "image/svg+xml" || file.mimetype === "image/jpeg" || file.mimetype === "application/json")) {
    cb(null, true)
  } else {
    cb(new Error('Can not up load!'))
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
export class CustomUploadController {
  @Post('customUpload')
  @Bind(UploadedFiles())
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'customUpload', maxCount: 1 },
  ], options))

  uploadFile(files) {
    // console.log(files)
    return 'Upload successfully!';
  }

}
