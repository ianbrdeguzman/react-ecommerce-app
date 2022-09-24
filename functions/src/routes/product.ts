import * as express from 'express';
import {MongoClient} from 'mongodb';
import {findAllProducts, findProductById} from '../services';

export function product(client: MongoClient) {
  const router = express.Router();

  router.route('/').get(findAllProducts(client));
  router.route('/:id').get(findProductById(client));

  return router;
}
