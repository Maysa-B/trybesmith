import { RowDataPacket } from 'mysql2';
import INewProductBody from '../interfaces/newProductBody';
import INewProductReturn from '../interfaces/newProductReturn';
import connection from '../models/connection';
import ProductModel from '../models/product.model';

export default class ProductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  newProduct = async (body: INewProductBody):Promise<INewProductReturn> => {
    const result = await this.model.newProduct(body);
    return result;
  };

  getAll = async ():Promise<RowDataPacket[]> => {
    const result = await this.model.getAll();
    return result;
  };
}