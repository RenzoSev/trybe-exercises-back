import express from 'express';
import generateToken from './utils/generateToken';
import { authEmail, authPassword, authToken } from './utils/checkers';
import { fetchBtc } from './services/api';
import { posts } from './services/data';

const app = express();

app.use(express.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body as { email: string; password: string };

  if (!authEmail(email) || !authPassword(password)) {
    return res.status(401).send('Email or password is incorrect');
  }

  const token = generateToken();

  return res.status(200).send({ token });
});

app.get('/btc/price', async (req, res) => {
  const { authorization: token } = req.headers as { authorization: string };

  console.log(token);

  if (!authToken(token)) {
    const invalidToken = { error: 'Invalid token' };

    return res.status(401).json(invalidToken);
  }

  const response = await fetchBtc();
  return res.status(200).json(response);
});

app.get('/posts', (req, res) => res.status(200).send({ posts }));

app.get('/posts/:id', (req, res) => {
  const { id } = req.params;

  const postById = posts.find((post) => post.id === Number(id));

  if (!postById) {
    const notFound = 'id not found';

    return res.status(404).send(notFound);
  }

  return res.status(200).json(postById);
});

app.listen(3000, () => console.log('Server is running!'));
