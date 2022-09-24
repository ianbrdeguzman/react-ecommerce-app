/* eslint-disable camelcase */
import {MongoClient, ObjectId} from 'mongodb';
import {Request, Response, NextFunction} from 'express';
import {dbName} from '../mogodb';

export function updateOrderById(client: MongoClient) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const {id, status, update_time, email_address} = req.body;

    try {
      client.connect();

      const db = client.db(dbName);
      const collection = db.collection('orders');
      const filter = {_id: new ObjectId(req.params.id)};
      const update = {
        $set: {
          isPaid: true,
          paidAt: new Date().toISOString(),
          paymentResult: {
            id,
            status,
            update_time,
            email_address
          }
        }
      };

      const updatedOrder = await collection.findOneAndUpdate(filter, update);

      req.id = updatedOrder.value?._id;
      req.updated = true;

      next();
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}
