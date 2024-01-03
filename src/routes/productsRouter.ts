import { Router } from 'express';
import productsController from '../controllers/productsController';

const productsRouter = Router();

productsRouter.post('/', productsController.addProducts);
productsRouter.get('/', productsController.listProducts);

export default productsRouter;
