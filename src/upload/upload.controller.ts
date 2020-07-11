import { Controller, Post, UploadedFile, UseInterceptors, Bind } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
// import { multer } from 'multer';
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
  }
})

const fileFilter = (req, file, cb) => {
  // reject the file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    cb(null, false)
  }

}

const options = {
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
}
@Controller()
export class UploadController {
  @Post('upload')
  @UseInterceptors(FileInterceptor('file', options))
  @Bind(UploadedFile())
  uploadFile(file) {
    console.log(file);
  }
}
