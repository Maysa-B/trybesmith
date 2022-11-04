import express from 'express';
import UserController from '../controllers/user.controller';
import newUserValidateClasse from '../middlewares/newUserValidateClasse';
import newUserValidateLevel from '../middlewares/newUserValidateLevel';
import newUserValidateName from '../middlewares/newUserValidateName';
import newUserValidatePass from '../middlewares/newUserValidatePass';

const userRouter = express.Router();

const controller = new UserController();

userRouter.post(
  '/',
  newUserValidateName,
  newUserValidateClasse,
  newUserValidatePass,
  newUserValidateLevel,
  controller.newUser,
);

export default userRouter;