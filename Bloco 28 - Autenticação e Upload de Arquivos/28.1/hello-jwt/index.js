require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { PORT } = process.env;

const ping = require('./controllers/ping');
const RegisterUserController = require('./controllers/RegisterUserController');

const middlewares = require('./middlewares');

const app = express();

const registerUserController = new RegisterUserController();

const CORS_OPTIONS = {
  origin: `http://localhost:${PORT}`,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Authorization'],
};

app.use(cors(CORS_OPTIONS));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', ping);

app.post('/register', registerUserController.handle);

app.post('/login');

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
