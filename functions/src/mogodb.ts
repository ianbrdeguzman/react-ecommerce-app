import {MongoClient} from 'mongodb';

const url = process.env.MONGODB_URI || '';
export const dbName = process.env.MONGODB || '';

export const client = new MongoClient(url);
