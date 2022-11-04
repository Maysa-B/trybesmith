import { RowDataPacket } from 'mysql2';
import INewOrderBody from '../interfaces/newOrderBody';
import connection from '../models/connection';
import OrderModel from '../models/order.model';

export default class OrderService {
  model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  getAll = async ():Promise<RowDataPacket[]> => {
    const result = await this.model.getAll();
    return result;
  };

  newOrder = async (body: INewOrderBody) => {
    await this.model.newOrder(body);
  };
}