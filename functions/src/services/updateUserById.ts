import {MongoClient, ObjectId} from 'mongodb';
import {Request, Response, NextFunction} from 'express';
import {dbName} from '../mogodb';
import {hash} from 'bcryptjs';

export interface User {
  _id: ObjectId;
  name: string;
  email: string;
  password: string;
}

export function updateUserById(client: MongoClient) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const {name: newName, email: newEmail, password: newPassword} = req.body;
    const {_id, name, email, password} = req.user as User;

    try {
      client.connect();

      const db = client.db(dbName);
      const collection = db.collection('users');
      const filter = {_id: new ObjectId(_id)};
      const update = {
        $set: {
          name: newName ?? name,
          email: newEmail ?? email,
          password: newPassword ? await hash(newPassword, 8) : password
        }
      };

      const updatedUser = await collection.findOneAndUpdate(filter, update);

      req.id = updatedUser.value?._id;
      req.updated = true;

      next();
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}
