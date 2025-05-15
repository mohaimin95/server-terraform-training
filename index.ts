import './pre-start';
import app from './src/app';

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('APP started listening on PORT', process.env.PORT);
});
