import express from 'express';
import UserController from '../controllers/user.controller';
import loginValidation from '../middlewares/loginValidation';

const loginRouter = express.Router();

const controller = new UserController();

loginRouter.post('/', loginValidation, controller.login);

export default loginRouter;