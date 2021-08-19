import User from '../models/User';
import rescue, { Response, Request } from 'express-rescue';
import UserBody from '../types/UserBody';

export const changeUser = rescue(async (req: Request, res: Response) => {
  const userBody = req.body as UserBody;

  const { id } = req.params as { id: string };

  const user = new User(userBody);

  const newUser = await user.changeById(id);

  if (!newUser) {
    res.status(404).json({ error: true, message: 'Usuário não encontrado' });
  }

  res.status(200).json(newUser);
});
