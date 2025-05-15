import express, { Express } from 'express';

const app: Express = express();

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
