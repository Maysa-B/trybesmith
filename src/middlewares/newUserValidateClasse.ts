import { NextFunction, Request, Response } from 'express';
import INewUserBody from '../interfaces/newUserBody';

type MyResquest = Request<unknown, unknown, INewUserBody>;

export default (req: MyResquest, res: Response, next: NextFunction) => {
  if (!req.body.classe) {
    return res.status(400).json({ message: '"classe" is required' });
  }

  if (typeof req.body.classe !== 'string') {
    return res.status(422).json({ message: '"classe" must be a string' });
  }

  if (req.body.classe.length <= 2) {
    return res.status(422).json({
      message: '"classe" length must be at least 3 characters long',
    });
  }

  next();
};