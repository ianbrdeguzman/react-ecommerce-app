import * as express from 'express';
import {MongoClient} from 'mongodb';
import {
  createOrder,
  isAuthenticated,
  findAllOrdersByUserId,
  findOrderById,
  updateOrderById
} from '../services';

export function order(client: MongoClient) {
  const router = express.Router();

  router.route('/create').post(isAuthenticated(), createOrder(client));
  router.route('/mine').get(isAuthenticated(), findAllOrdersByUserId(client));
  router.route('/:id').get(isAuthenticated(), findOrderById(client));
  router
      .route('/:id/pay')
      .put(isAuthenticated(), updateOrderById(client), findOrderById(client));

  return router;
}
