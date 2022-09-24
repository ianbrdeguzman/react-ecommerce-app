import {MongoClient} from 'mongodb';
import {Request, Response, NextFunction} from 'express';
import {dbName} from '../mogodb';

export function findAllOrdersByUserId(client: MongoClient) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      client.connect();

      const db = client.db(dbName);
      const collection = db.collection('orders');
      const orders = await collection.find({userId: req.id}).toArray();

      res.status(200).send(orders);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}
