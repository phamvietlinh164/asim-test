import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

const { jwtConfig } = require('./jwt-config');
const jwt = require('jsonwebtoken');



@Injectable()
export class Authenticate implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    // console.log('Request...');
    try {
      const decoded = jwt.verify(req.headers.token, jwtConfig.jwtSecretKey);
      if (decoded.username !== jwtConfig.username || decoded.password !== jwtConfig.password) {
        res.status(401).json({ message: 'Unauthenticated!', statusCode: 401 })
        return
      } else {
        next();
      }

    } catch (err) {
      res.status(401).json({ message: 'Unauthenticated!', statusCode: 401 })
    }

  }
}
