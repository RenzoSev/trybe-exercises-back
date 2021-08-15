import express from 'express';
import generateToken from './utils/generateToken';
import { authEmail, authPassword, authToken } from './utils/checkers';
import { fetchBtc } from './data/api';

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

  console.log(token)

  if (!authToken(token)) {
    const invalidToken = { error: 'Invalid token' };

    return res.status(401).json(invalidToken);
  }

  const response = await fetchBtc();
  return res.status(200).json(response);
});

app.listen(3000, () => console.log('Server is running!'));
