import express from 'express';
import productsRouter from './routes/productsRouter';
import ordersRouter from './routes/ordersRouter';
import loginRouter from './routes/loginRouter';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.use('/login', loginRouter);

export default app;