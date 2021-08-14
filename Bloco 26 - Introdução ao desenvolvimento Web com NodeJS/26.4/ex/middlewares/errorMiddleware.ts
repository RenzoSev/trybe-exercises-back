import { ErrorRequestHandler } from 'express';

const errorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  res.status(500).json({ error: `Erro: ${err.message}` });
};

export default errorMiddleware;
