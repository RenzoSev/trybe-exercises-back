import fs from 'fs/promises';
import express, {
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from 'express';
import bodyParser from 'body-parser';
import rescue from 'express-rescue';

type GreetingsBody = {
  name: string;
  age: string;
};

const app = express();

const authYear = (req: Request, res: Response, next: NextFunction) => {
  const { age } = req.body as GreetingsBody;

  if (Number(age) < 17) {
    const unauthorized = { message: 'Unauthorized' };

    res.status(401).json(unauthorized);
  }

  next();
};

const errorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  res.status(500).json({ error: `Erro: ${err.message}` });
};

app.use(bodyParser());

app.use(errorMiddleware);

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
  rescue(async (req, res) => {
    const simpsons = await fs.readFile('simpsons.json', 'utf-8');

    const parsedSimpsons = JSON.parse(simpsons);

    res.status(200).json(parsedSimpsons);
  })
);

app.listen(3000, () => console.log('Server is running! '));
