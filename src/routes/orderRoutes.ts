import express from 'express';
import OrderController from '../controllers/order.controller';
import newOrderValidateIds from '../middlewares/newOrderValidateIds';
import validateToken from '../middlewares/validateToken';

const orderRouter = express.Router();

const controller = new OrderController();

orderRouter.get('/', controller.getAll);
orderRouter.post('/', validateToken, newOrderValidateIds, controller.newOrder);

export default orderRouter;