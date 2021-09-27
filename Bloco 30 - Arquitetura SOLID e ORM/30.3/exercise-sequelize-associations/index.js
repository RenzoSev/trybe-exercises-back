const bodyParser = require('body-parser');

const express = require('express');

const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 3000;

app.use('/patients', routes.patients);

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});
