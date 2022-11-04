import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import INewOrderBody from '../interfaces/newOrderBody';

export default class OrderModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  getAll = async (): Promise<RowDataPacket[]> => {
    const query = `SELECT t1.id, t1.userId, JSON_ARRAYAGG(t2.id) AS productsIds 
    FROM Trybesmith.Orders AS t1
    INNER JOIN Trybesmith.Products AS t2
    ON t1.id = t2.orderId
    GROUP BY t1.id;`;
    const [result] = await this.connection.execute<RowDataPacket[]>(query);
    return result;
  };

  newOrder = async (body: INewOrderBody) => {
    const query = 'INSERT INTO Trybesmith.Orders(userId) VALUES(?)';
    const values = [body.token.id];
    const [insertOrder] = await this.connection.execute<ResultSetHeader>(query, values);

    const query2 = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?;';
    body.body.productsIds.forEach(async (productId) => {
      await this.connection.execute(query2, [insertOrder.insertId, productId]);
    });
  };
}