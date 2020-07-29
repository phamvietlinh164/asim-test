import { Injectable } from '@nestjs/common';
const jwt = require('jsonwebtoken');
const { jwtSecretKey } = require('../login/login.service');

@Injectable()
export class CheckAuthService {
  checkAuth(token: string) {
    try {
      var decoded = jwt.verify(token, jwtSecretKey);
      return { isLogin: true }
    } catch (err) {
      return { isLogin: false }
    }

  }
}
