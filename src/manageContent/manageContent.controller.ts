import { Controller, Post, UseInterceptors, Bind, UploadedFiles } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { HttpException, HttpStatus } from '@nestjs/common';

// const HttpException = require('h')
// import { multer } from 'multer';
const multer = require('multer');
const mkdirp = require('mkdirp');
const jwt = require('jsonwebtoken');
// const sizeOf = require('image-size');
const { jwtConfig } = require('../login/jwt-config');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = `client/upload/hospitals/manageContent`;
    mkdirp(dir, err => cb(err, dir))
  },
  filename: function (req, file, cb) {

    if (file.fieldname === 'manageContent' && file.mimetype === 'application/json') {
      cb(null, `${req.headers.name}.json`)
    }

  }
})

const fileFilter = (req, file, cb) => {
  // reject the file
  try {
    const decoded = jwt.verify(req.headers.token, jwtConfig.jwtSecretKey);
    if (decoded.username !== jwtConfig.username || decoded.password !== jwtConfig.password) {
      throw new Error('Wrong username or password!')
    }
  } catch (err) {
    return cb(new HttpException('Unauthenticated!', 401), false)
  }

  if (file.fieldname === 'manageContent' && file.mimetype === 'application/json') {
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
export class ManageContentController {
  @Post('manageContent')
  @Bind(UploadedFiles())
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'manageContent', maxCount: 1 },
  ], options))

  uploadFile(files) {
    // console.log(files)
    return 'Upload successfully!';
  }

}
