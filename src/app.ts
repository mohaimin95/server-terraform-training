import express, { Express } from 'express';
import cors from 'cors';

const app: Express = express();
app.use(cors());

app.get('/health-check', (__, res) => {
  res.send('OK');
});

app.get('/', (__, res) => {
  res.send([
    'Following are from server',
    'Fortnite',
    'RDR',
    'It takes two',
    'Xbox',
  ]);
});

export default app;
