import express from 'express';
import ProductController from '../controllers/product.controller';
import newProductiValidateAmount from '../middlewares/newProductiValidateAmount';
import newProductValidateName from '../middlewares/newProductValidateName';

const productRouter = express.Router();

const controller = new ProductController();

productRouter.post('/', newProductValidateName, newProductiValidateAmount, controller.newProduct);
productRouter.get('/', controller.getAll);

export default productRouter;