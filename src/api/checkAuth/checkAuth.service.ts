import { Injectable } from '@nestjs/common';
const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../login/jwt-config');

@Injectable()
export class CheckAuthService {
  checkAuth(token: string) {
    try {
      var decoded = jwt.verify(token, jwtConfig.jwtSecretKey);
      if(decoded.username !== jwtConfig.username || decoded.password !== jwtConfig.password){
        throw new Error("Wrong username or password!")
      }
      return { isLogin: true }
    } catch (err) {
      // console.log(err)
      return { isLogin: false }
    }

  }
}
