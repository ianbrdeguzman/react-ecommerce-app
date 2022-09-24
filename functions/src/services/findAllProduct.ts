import {MongoClient} from 'mongodb';
import {Request, Response, NextFunction} from 'express';
import {dbName} from '../mogodb';

export function findAllProducts(client: MongoClient) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      client.connect();

      const db = client.db(dbName);
      const collection = db.collection('products');
      const products = await collection.find({}).toArray();

      res.status(200).send(products);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}
