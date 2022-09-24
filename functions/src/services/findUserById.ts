import {MongoClient, ObjectId} from 'mongodb';
import {Request, Response, NextFunction} from 'express';
import {dbName} from '../mogodb';
import {generateToken} from '../lib';

export function findUserById(client: MongoClient) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const id = req.id ?? req.params.id;

    try {
      client.connect();

      const db = client.db(dbName);
      const collection = db.collection('users');
      const user = await collection.findOne({_id: new ObjectId(id)});

      if (!user) {
        res.status(404).send({message: 'User not found'});
        return;
      }

      if (req.id && req.body._id && user && !req.updated) {
        req.user = user;
        next();
        return;
      }

      res.status(200).send({
        _id: user?._id,
        name: user?.name,
        email: user?.email,
        isAdmin: user?.isAdmin,
        token: generateToken(user)
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}
