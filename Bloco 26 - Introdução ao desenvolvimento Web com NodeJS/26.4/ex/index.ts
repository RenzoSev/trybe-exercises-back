import express, { Request, Response } from 'express';
import rescue from 'express-rescue';

import bodyParser from 'body-parser';

import { getSimpsons, setSimpsons } from './data/api';

import authMiddleware from './middlewares/authMiddleware';
import authYear from './middlewares/authYear';
import errorMiddleware from './middlewares/errorMiddleware';

import { GreetingsBody } from './types/Body';
import generateToken from './utils/generateToken';

type SimpsonsBody = {
  id: string;
  name: string;
};

type UserBody = {
  email: string | undefined;
  password: string | undefined;
  firstName: string | undefined;
  phone: string | undefined;
};

const app = express();

app.use(bodyParser());

app.use(authMiddleware);

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

app.post('/greetings', authYear, (req, res) => {
  const { name } = req.body as GreetingsBody;

  const greetings = { message: `Hello, ${name}` };

  res.status(200).json(greetings);
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;

  const nameAndAge = `Seu nome é ${name} e você tem ${age} anos de idade`;

  res.json(nameAndAge);
});

app.get(
  '/simpsons',
  rescue(async (req: Request, res: Response) => {
    const simpsons = await getSimpsons();

    res.status(200).json(simpsons);
  })
);

app.get(
  '/simpsons/:id',
  rescue(async (req: Request, res: Response) => {
    const { id } = req.params;

    const simpsons = await getSimpsons();

    const simpson = simpsons.find((simp) => id === simp.id);

    if (simpson) res.status(200).json(simpson);

    const notFound = { message: 'simpson not found' };
    res.status(404).json(notFound);
  })
);

app.post(
  '/simpsons',
  rescue(async (req: Request, res: Response) => {
    const simpsons = await getSimpsons();

    const simpson = req.body as SimpsonsBody;

    if (simpsons.some(({ id }) => id === simpson.id)) {
      const alreadExists = { message: 'id already exists' };

      res.status(409).json(alreadExists);
    }

    await setSimpsons(simpson, simpsons);

    res.status(204).end();
  })
);

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body as UserBody;

  if ([email, password, firstName, phone].includes(undefined)) {
    const unauthorizedUser = { message: 'missing fields' };

    return res.send(401).json(unauthorizedUser);
  }

  const token = generateToken();

  return res.status(200).json({ token });
});

app.use(errorMiddleware);

app.listen(3000, () => console.log('Server is running!'));
