import { Request, Response } from 'express';
import productsService from '../services/productsService';

const addProducts = async (req: Request, res: Response) : Promise<Response> => {
  const { name, price, orderId } = req.body;
  const result = await productsService.addProducts({ name, price, orderId });
  const { type, message } = result;
  return res.status(type).json(message);
};

const listProducts = async (req: Request, res: Response) : Promise<Response> => {
  const result = await productsService.listProducts();
  const { type, message } = result;
  return res.status(type).json(message);
};

export default {
  addProducts,
  listProducts,
};