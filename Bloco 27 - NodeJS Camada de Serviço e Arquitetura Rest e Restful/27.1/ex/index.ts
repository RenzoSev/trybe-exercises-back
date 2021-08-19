import express from 'express';

import { authUser } from './middlewares/authUser';
import { changeUser } from './middlewares/changeUser';
import { createUser } from './middlewares/createUser';
import { getAllUsers } from './middlewares/getAllUsers';
import { getUserById } from './middlewares/getUserById';

import error from './middlewares/error';

const app = express();

const PORT = 3000;

app.use(express.json());

app.post('/user', authUser, createUser);

app.get('/user', getAllUsers);

app.get('/user/:id', getUserById);

app.put('/user/:id', authUser, changeUser);

app.use(error);

app.listen(PORT, () => console.log(`Server is running at ${PORT} port`));
