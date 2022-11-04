import { Request, Response } from 'express';
import INewProductBody from '../interfaces/newProductBody';
import ProductService from '../services/product.service';

export default class ProductController {
  service = new ProductService();

  newProduct = async (req: Request<unknown, unknown, INewProductBody>, res: Response) => {
    const result = await this.service.newProduct(req.body);
    res.status(201).json(result);
  };

  getAll = async (req: Request, res: Response) => {
    const result = await this.service.getAll();
    res.status(200).json(result);
  };
}