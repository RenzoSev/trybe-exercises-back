import { Request, Response, NextFunction } from 'express';
import { GreetingsBody } from '../types/Body';

const authYear = (req: Request, res: Response, next: NextFunction) => {
  const { age } = req.body as GreetingsBody;

  if (Number(age) < 17) {
    const unauthorized = { message: 'Unauthorized' };

    res.status(401).json(unauthorized);
  }

  next();
};

export default authYear;
