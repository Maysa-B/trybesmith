import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import ILogin from '../interfaces/login';
import INewUserBody from '../interfaces/newUserBody';

export default class UserModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  newUser = async (body: INewUserBody) => {
    const query = `INSERT INTO Trybesmith.Users (username, classe, level, password) 
    VALUES (?, ?, ?, ?);`;
    const values = [body.username, body.classe, body.level, body.password];
    await this.connection.execute<ResultSetHeader>(query, values);
  };

  login = async (info: ILogin): Promise<RowDataPacket[]> => {
    const query = `SELECT * FROM Trybesmith.Users
    WHERE username = ? AND password = ?`;
    const values = [info.username, info.password];
    const [result] = await this.connection.execute<RowDataPacket[]>(query, values);
    return result;
  };
}
