import { NextFunction, Request, Response } from 'express';
import INewOrderBody from '../interfaces/newOrderBody';

type MyReq = Request<unknown, unknown, INewOrderBody>;

export default async (req: MyReq, res: Response, next: NextFunction) => {
  const { productsIds } = req.body.body;

  if (!productsIds) {
    return res.status(400).json({ message: '"productsIds" is required' });
  }

  if (typeof productsIds !== 'object') {
    return res.status(422).json({ message: '"productsIds" must be an array' });
  }

  if (productsIds.length === 0) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }

  next();
};