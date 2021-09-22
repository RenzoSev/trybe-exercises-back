require('dotenv').config();

const express = require('express');

const CreateBookController = require('./controller/CreateBookController');
const GetAllBooksController = require('./controller/GetAllBooksController');

const app = express();

const PORT = process.env.PORT || 3000;

const createBookController = new CreateBookController();
const getAllBooksController = new GetAllBooksController();

app.use(express.json());

app.get('/books', getAllBooksController.handle);

app.post('/book', createBookController.handle);

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
