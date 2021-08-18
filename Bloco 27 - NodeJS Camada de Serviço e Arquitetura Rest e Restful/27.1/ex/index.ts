import express from 'express';
import User from './models/User';
import UserBody from './types/UserBody';

const app = express();

const PORT = 3000;

app.use(express.json());

app.post('/user', async (req, res) => {
  const { first_name, last_name, email, password } = req.body as UserBody;

  const userBody = { first_name, last_name, email, password };

  const user = new User(userBody);

  const { message, error } = user.isValid();

  if (error) {
    return res.status(401).json({ error, message });
  }

  const formatedUser = await user.createUser();

  return res.status(201).json(formatedUser);
});

app.get('/user', async (req, res) => {
  const user = new User();

  const users = await user.getAll();

  return res.status(200).json(users);
});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;

  const user = new User();

  const userById = await user.getById(id);

  return res.status(200).json(userById);
});

app.listen(PORT, () => console.log(`Server is running at ${PORT} port`));
