import { NextFunction, Request, Response } from 'express';
import INewUserBody from '../interfaces/newUserBody';

type MyResquest = Request<unknown, unknown, INewUserBody>;

export default (req: MyResquest, res: Response, next: NextFunction) => {
  if (!req.body.password) {
    return res.status(400).json({ message: '"password" is required' });
  }

  if (typeof req.body.password !== 'string') {
    return res.status(422).json({ message: '"password" must be a string' });
  }

  if (req.body.password.length < 8) {
    return res.status(422).json({
      message: '"password" length must be at least 8 characters long',
    });
  }

  next();
};