import { Request, Response } from 'express';
import ILogin from '../interfaces/login';
import INewUserBody from '../interfaces/newUserBody';
import generateToken from '../jwt/generateToken';
import UserService from '../services/user.service';

export default class UserController {
  service = new UserService();

  newUser = async (req: Request<unknown, unknown, INewUserBody>, res: Response) => {
    const { classe, level, username } = req.body;
    await this.service.newUser(req.body);
    const token = generateToken({ username, classe, level });
    res.status(201).json({ token });
  };

  login = async (req: Request<unknown, unknown, ILogin>, res: Response) => {
    const [result] = await this.service.login(req.body);
    if (result === undefined) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }

    const token = generateToken({ id: result.id, username: result.username });
    res.status(200).json({ token });
  };
}