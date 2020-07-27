import { Controller, Post, UseInterceptors, Bind, UploadedFiles, Req } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
// import { multer } from 'multer';
const multer = require('multer');
const mkdirp = require('mkdirp');

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
    }
  }
})

const fileFilter = (req, file, cb) => {
  // reject the file
  if (file.fieldname === 'image' && file.mimetype === 'image/png') {
    console.log('abc')
    cb(null, true)
  } else if (file.fieldname === 'content' && file.mimetype === 'application/json') {
    cb(null, true)
  } else {
    cb(null, false)
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
    { name: 'content', maxCount: 1 }
  ], options))

  uploadFile(files) {
    return 'Upload successfully!';
  }

}
