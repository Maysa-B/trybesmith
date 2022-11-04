import express from 'express';
import loginRouter from './routes/loginRouter';
import orderRouter from './routes/orderRoutes';
import productRouter from './routes/productRouter';
import userRouter from './routes/userRouter';

const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/orders', orderRouter);
app.use('/users', userRouter);
app.use('/login', loginRouter);

export default app;
