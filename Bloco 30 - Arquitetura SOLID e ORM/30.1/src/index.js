require('dotenv').config();

const express = require('express');
const CreateBookController = require('./controller/CreateBookController');

const app = express();

const PORT = process.env.PORT || 3000;

const createBookController = new CreateBookController();

app.use(express.json());

app.post('/book', createBookController.handle);

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
