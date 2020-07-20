import { Controller, Post, UseInterceptors, Bind, UploadedFiles, Req } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
// import { multer } from 'multer';
const multer = require('multer');
const mkdirp = require('mkdirp');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = `client/st/hospitals/${req.headers.hospital}`;
    mkdirp(dir, err => cb(err, dir))
  },
  filename: function (req, file, cb) {
    const type = file.originalname.split(".")[1];
    cb(null, `${req.headers.name}.${type}`)
  }
})

const fileFilter = (req, file, cb) => {
  // reject the file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/svg+xml') {
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

@Controller('upload')
export class UploadController {
  @Post()
  @Bind(UploadedFiles())
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'image', maxCount: 1 },
    // { name: 'background', maxCount: 1 }
  ], options))

  uploadFile(files) {
    console.log(files);

    return 'Upload successfully!';
  }

}
