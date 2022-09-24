import {MongoClient} from 'mongodb';
import {compare} from 'bcryptjs';
import {NextFunction, Request, Response} from 'express';
import {generateToken} from '../lib';
import {dbName} from '../mogodb';

export function signInUser(client: MongoClient) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const {email, password} = req.body;

    try {
      client.connect();

      const db = client.db(dbName);
      const collection = db.collection('users');
      const user = await collection.findOne({email});

      if (!user) {
        res.status(401).send({
          message: 'We cannot find an account with that e-mail address.'
        });
        return;
      }

      if (await compare(password, user?.password ?? '')) {
        res.status(200).send({
          _id: user?._id.toString(),
          name: user?.name,
          email: user?.email,
          isAdmin: user?.isAdmin,
          token: generateToken(user)
        });
        return;
      }

      res.status(401).send({
        message: 'You might have entered a wrong password.'
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}
