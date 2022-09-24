import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';
import 'dotenv/config';
import {client} from './mogodb';
import {order, product, user} from './routes';

const app = express();

app.use(cors());
app.use('/v1/product', product(client));
app.use('/v1/user', user(client));
app.use('/v1/order', order(client));

export const api = functions.https.onRequest(app);
