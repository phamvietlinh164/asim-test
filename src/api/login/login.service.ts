import { Injectable } from '@nestjs/common';
const jwt = require('jsonwebtoken');
const {jwtConfig} = require('./jwt-config')


@Injectable()
export class LoginService {
  getToken(username: string, password: string) {
    if (username === jwtConfig.username && password === jwtConfig.password) {
      const token = jwt.sign({ username, password }, jwtConfig.jwtSecretKey, { expiresIn: jwtConfig.expiredIn });
      return token
    } else {
      return null
    }
  }
}
