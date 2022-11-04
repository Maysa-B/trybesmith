import { NextFunction, Request, Response } from 'express';
import INewUserBody from '../interfaces/newUserBody';

type MyResquest = Request<unknown, unknown, INewUserBody>;

export default (req: MyResquest, res: Response, next: NextFunction) => {
  if (!req.body.level && req.body.level !== 0) {
    return res.status(400).json({ message: '"level" is required' });
  }
  
  if (typeof req.body.level !== 'number') {
    return res.status(422).json({ message: '"level" must be a number' });
  }

  if (req.body.level < 1) {
    return res.status(422).json({
      message: '"level" must be greater than or equal to 1',
    });
  }

  next();
};