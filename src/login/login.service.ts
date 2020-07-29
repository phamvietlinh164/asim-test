import { Injectable } from '@nestjs/common';
const jwt = require('jsonwebtoken');


export const jwtSecretKey = "jafddwd";

@Injectable()
export class LoginService {
  getToken(username: string, password: string) {
    if (username === "abc" && password === "abc") {
      const token = jwt.sign({
        data: { username, password }
      }, jwtSecretKey, { expiresIn: '100h' });
      return token
    } else {
      return null
    }
  }
}
