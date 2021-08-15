import express from 'express';
import generateToken from './utils/generateToken';
import { authEmail, authPassword } from './utils/regex';

const app = express();

app.use(express.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body as { email: string; password: string };

  if (!authEmail(email) || !authPassword(password)) {
    res.status(401).send('Email or password is incorrect');
  }

  const token = generateToken();

  res.status(200).send({ token });
});

app.listen(3000, () => console.log('Server is running!'));
