import { NextFunction, Request, Response } from 'express';
import INewProductBody from '../interfaces/newProductBody';

type MyResquest = Request<unknown, unknown, INewProductBody>;

export default (req: MyResquest, res: Response, next: NextFunction) => {
  if (!req.body.amount) {
    return res.status(400).json({ message: '"amount" is required' });
  }
  
  if (typeof req.body.amount !== 'string') {
    return res.status(422).json({ message: '"amount" must be a string' });
  }
  
  if (req.body.amount.length <= 2) {
    return res.status(422).json({ message: '"amount" length must be at least 3 characters long' });
  }  

  next();
};