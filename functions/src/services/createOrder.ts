import {MongoClient} from 'mongodb';
import {Request, Response, NextFunction} from 'express';
import {dbName} from '../mogodb';

export function createOrder(client: MongoClient) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const {
      _id,
      orderItems,
      shippingDetails,
      paymentMethod,
      itemPrice,
      shippingPrice,
      taxPrice,
      totalPrice
    } = req.body;

    if (orderItems.length === 0) {
      res.status(400).send({
        message: 'Cart is empty'
      });
      return;
    }

    try {
      client.connect();

      const db = client.db(dbName);
      const collection = db.collection('orders');
      const order = await collection.insertOne({
        isPaid: false,
        isDelivered: false,
        orderItems,
        shippingDetails,
        paymentMethod,
        itemPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
        userId: _id,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        __v: 0
      });

      res.status(200).send({
        message: 'New order created',
        order: order.insertedId
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}
