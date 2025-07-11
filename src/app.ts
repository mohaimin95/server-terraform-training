import express, { Express } from 'express';
import cors from 'cors';

const app: Express = express();
app.use(cors());

app.get('/api/health-check', (__, res) => {
  res.send('OK');
});

app.get('/api', (__, res) => {
  res.send([
    'Following are from server',
    'Fortnite',
    'RDR',
    'It takes two',
    'Xbox',
  ]);
});

export default app;
