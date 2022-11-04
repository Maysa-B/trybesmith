import { NextFunction, Request, Response } from 'express';
import INewUserBody from '../interfaces/newUserBody';

type MyResquest = Request<unknown, unknown, INewUserBody>;

export default (req: MyResquest, res: Response, next: NextFunction) => {
  if (!req.body.username) {
    return res.status(400).json({ message: '"username" is required' });
  }

  if (typeof req.body.username !== 'string') {
    return res.status(422).json({ message: '"username" must be a string' });
  }

  if (req.body.username.length <= 2) {
    return res.status(422).json({
      message: '"username" length must be at least 3 characters long',
    });
  }

  next();
};