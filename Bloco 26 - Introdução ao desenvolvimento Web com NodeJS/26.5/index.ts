import express from 'express';

import { fetchBtc } from './services/api';
import { posts, users } from './services/data';

import { authEmail, authPassword, authToken } from './utils/checkers';
import { deleteRecipeFromDb, alterRecipeFromDb } from './utils/db';
import getOperation from './utils/operators';
import generateToken from './utils/generateToken';

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
    const notFound = 'id not found.';

    return res.status(404).send(notFound);
  }

  return res.status(200).json(postById);
});

app.get('/user/:name', (req, res) => {
  const { name } = req.params;

  const user = users.find(
    ({ user }) => user.toLowerCase() === name.toLowerCase()
  ) as {
    id: number;
    user: string;
    comments: string[];
  };

  if (!user) {
    const notFound = 'user not found.';

    return res.status(404).send(notFound);
  }

  const { comments } = user;

  return res.status(200).json({ comments });
});

app.get('/:operacao/:numero1/:numero2', (req, res) => {
  const { operacao, numero1, numero2 } = req.params;

  const result = getOperation(operacao, Number(numero1), Number(numero2));

  if (result === 'error') return res.status(400).send('Invalid operator.');

  return res.status(200).send(result.toString());
});

app.delete('/recipe/:id', (req, res) => {
  const { id } = req.params;

  const deletedRecipe = deleteRecipeFromDb(Number(id));

  if (deletedRecipe === 'error') {
    return res.status(404).send('Recipe not found');
  }

  return res.status(200).json(deletedRecipe);
});

app.put('/recipe/:id', (req, res) => {
  const { id } = req.params;

  const { recipe } = req.body as {
    recipe: { id: string; name: string; ingredients: string[] };
  };

  console.log(recipe);

  const fixedRecipe = {
    id: Number(recipe.id),
    name: recipe.name,
    ingredients: recipe.ingredients,
  };

  const updatedRecipe = alterRecipeFromDb(Number(id), fixedRecipe);

  if (updatedRecipe === 'error') {
    return res.status(404).send('Recipe not found');
  }

  return res.status(200).json(updatedRecipe);
});

app.get('/comments', (req, res) => {
  const { filter } = req.query;

  const comments = users.reduce((acc, cur) => {
    if (filter) {
      const newAcc = cur.comments.includes(filter as string)
        ? [...acc, ...cur.comments]
        : acc;

      return newAcc;
    }

    return [...acc, ...cur.comments];
  }, [] as string[]);

  return res.status(200).json({ comments });
});

app.listen(3000, () => console.log('Server is running!'));
