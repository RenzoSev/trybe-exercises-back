import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser());

app.get('/', (req, res) => {
  res.status(200).send('Home Page');
});

app.get('/ping', (req, res) => {
  const pong = { message: 'pong' };

  res.json(pong);
});

app.post('/hello', (req, res) => {
  const name = req.body.name as string;

  const message = { message: `Hello, ${name}` };

  res.json(message);
});

app.listen(3000, () => console.log('Server is running! '));
