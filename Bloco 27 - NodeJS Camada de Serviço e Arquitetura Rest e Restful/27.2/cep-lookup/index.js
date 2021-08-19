import express from 'express';

import cepRouter from './routes/cep.js';

import pingPongRoutes from './routes/pingPong.js'

const app = express();

const PORT = 3000;

app.use('/ping', pingPongRoutes);

app.use('/cep', cepRouter);

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
