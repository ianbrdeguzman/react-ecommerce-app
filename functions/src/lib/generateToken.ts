import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import {WithId, Document} from 'mongodb';

export function generateToken(user: WithId<Document> | null) {
  return jwt.sign(
      {
        _id: user?._id,
        name: user?.name,
        email: user?.email,
        isAdmin: user?.isAdmin
      },
      process.env.JWT_SECRET || '',
      {
        expiresIn: '1d'
      }
  );
}
