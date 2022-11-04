import { NextFunction, Request, Response } from 'express';
import INewProductBody from '../interfaces/newProductBody';

type MyResquest = Request<unknown, unknown, INewProductBody>;

export default (req: MyResquest, res: Response, next: NextFunction) => {
  if (!req.body.name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  if (typeof req.body.name !== 'string') {
    return res.status(422).json({ message: '"name" must be a string' });
  }

  if (req.body.name.length <= 2) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }

  next();
};