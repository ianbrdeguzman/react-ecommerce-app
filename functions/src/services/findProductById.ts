import {MongoClient, ObjectId} from 'mongodb';
import {Request, Response, NextFunction} from 'express';
import {dbName} from '../mogodb';

export function findProductById(client: MongoClient) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    if (!id) {
      res.status(400).send({
        message: 'Invalid request'
      });
    }

    try {
      client.connect();

      const db = client.db(dbName);
      const collection = db.collection('products');
      const product = await collection.findOne(new ObjectId(id));

      res.status(200).send(product);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}
