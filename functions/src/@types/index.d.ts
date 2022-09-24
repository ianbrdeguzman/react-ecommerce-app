import {ObjectId, WithId, Document} from 'mongodb';

declare global {
  namespace Express {
    interface Request {
      id?: ObjectId;
      user?: WithId<Document>;
      updated?: boolean;
    }
  }
}
