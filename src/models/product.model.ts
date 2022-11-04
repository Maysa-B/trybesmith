import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import INewProductBody from '../interfaces/newProductBody';
import INewProductReturn from '../interfaces/newProductReturn';

export default class ProductModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  newProduct = async (body: INewProductBody): Promise<INewProductReturn> => {
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const [resp] = await this.connection.execute<ResultSetHeader>(query, [body.name, body.amount]);
    const { insertId: id } = resp;

    return { id, ...body };
  };

  getAll = async (): Promise<RowDataPacket[]> => {
    const query = 'SELECT * FROM Trybesmith.Products';
    const [result] = await this.connection.execute<RowDataPacket[]>(query);
    return result;
  };
}