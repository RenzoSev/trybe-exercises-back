import { Request, Response, NextFunction } from 'express';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization || authorization.length !== 16) {
    const invalidToken = { message: 'Token inválido!' };

    return res.status(401).json(invalidToken);
  }
};

export default authMiddleware;
