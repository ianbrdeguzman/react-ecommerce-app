import {MongoClient, ObjectId} from 'mongodb';
import {Request, Response, NextFunction} from 'express';
import {dbName} from '../mogodb';

export function findOrderById(client: MongoClient) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      client.connect();

      const db = client.db(dbName);
      const collection = db.collection('orders');
      const order = await collection.findOne({
        _id: new ObjectId(req.params.id)
      });

      if (!order) {
        res.status(404).send({message: 'Order not found'});
        return;
      }

      if (req.method === 'GET' || req.updated) {
        res.status(200).send(order);
        return;
      }

      next();
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}
