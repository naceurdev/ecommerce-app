
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import cors from'@koa/cors';

import config from './config';
import db from './db/index';
import handlers from './handlers/index';


const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(cors());

app.use(router.routes());
app.use(router.allowedMethods());

router.get('/health', (ctx) => {
  ctx.status = 200;
});

router.get('/details', ctx => handlers.getUserDetails(ctx))
  .post('/create', ctx => handlers.createUser(ctx))
  .post('/update', ctx => handlers.updateUser(ctx))
  .delete('/delete', ctx => handlers.deleteUser(ctx));

app.on('error', (err, ctx) => {
  console.log('server error', err, ctx);
});


app.listen(config.port || 5000, () => {
  console.log(`user Serivce started on port ${config.port}`);
  db.initialize();
});

export default app;
