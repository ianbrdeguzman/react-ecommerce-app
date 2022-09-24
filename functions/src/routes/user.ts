import * as express from 'express';
import {MongoClient} from 'mongodb';
import {
  createUser,
  findUserById,
  isAuthenticated,
  signInUser,
  updateUserById
} from '../services';

export function user(client: MongoClient) {
  const router = express.Router();

  router.route('/create').post(createUser(client), findUserById(client));
  router.route('/signin').post(signInUser(client));
  router
      .route('/update')
      .put(
          isAuthenticated(),
          findUserById(client),
          updateUserById(client),
          findUserById(client)
      );
  router.route('/:id').get(findUserById(client));

  return router;
}
