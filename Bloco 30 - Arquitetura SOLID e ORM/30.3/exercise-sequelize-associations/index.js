const bodyParser = require('body-parser');

const express = require('express');

const { patients, plans } = require('./routes');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 3000;

app.use('/patients', patients);

app.use('/plans', plans);

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});
