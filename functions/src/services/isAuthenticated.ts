import {Request, Response, NextFunction} from 'express';
import {ObjectId} from 'mongodb';
import * as jwt from 'jsonwebtoken';
import 'dotenv/config';

export interface Token {
  _id: ObjectId;
  name: string;
  email: string;
  isAdmin: boolean;
}

export function isAuthenticated() {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const authorization = req.headers.authorization;

      if (!authorization) {
        res.status(401).send({
          message: 'No token found'
        });
        return;
      }

      const {_id} = req.body;

      const token = authorization.slice(7, authorization.length);
      const decoded = jwt.verify(token, process.env.JWT_SECRET || '') as Token;

      if (!decoded) {
        res.status(401).send({
          message: 'Invalid token'
        });
        return;
      }

      if (decoded._id !== _id && req.method !== 'GET') {
        res.status(401).send({message: 'Unauthorized request'});
        return;
      }

      req.id = decoded._id;

      next();
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}
