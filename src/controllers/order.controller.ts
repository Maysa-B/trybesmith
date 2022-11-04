import { Request, Response } from 'express';
import INewOrderBody from '../interfaces/newOrderBody';
import OrderService from '../services/order.service';

export default class OrderController {
  service = new OrderService();

  getAll = async (req: Request, res: Response) => {
    const result = await this.service.getAll();
    res.status(200).json(result);
  };

  newOrder = async (req: Request<unknown, unknown, INewOrderBody>, res: Response) => {
    await this.service.newOrder(req.body);
    res.status(201).json({ userId: req.body.token.id, productsIds: req.body.body.productsIds });
  };
}