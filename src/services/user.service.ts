import { RowDataPacket } from 'mysql2';
import ILogin from '../interfaces/login';
import INewUserBody from '../interfaces/newUserBody';
import connection from '../models/connection';
import UserModel from '../models/user.model';

export default class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  newUser = async (body: INewUserBody) => {
    await this.model.newUser(body);
  };

  login = async (info: ILogin): Promise<RowDataPacket[]> => {
    const result = this.model.login(info);
    return result;
  };
}