import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Home Page');
});

app.get('/ping', (req, res) => {
  const pong = { message: 'pong' };

  res.json(pong);
});

app.listen(3000, () => console.log('Server is running! '));
