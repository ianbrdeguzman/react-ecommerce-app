import {MongoClient} from 'mongodb';
import {Request, Response, NextFunction} from 'express';
import {dbName} from '../mogodb';
import {hash} from 'bcryptjs';

export function createUser(client: MongoClient) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const {name, email, password, isAdmin} = req.body;

    try {
      client.connect();

      const db = client.db(dbName);
      const collection = db.collection('users');
      const user = await collection.insertOne({
        name,
        email,
        password: await hash(password, 8),
        isAdmin: isAdmin ?? false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        __v: 0
      });

      req.id = user.insertedId;

      next();
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}
