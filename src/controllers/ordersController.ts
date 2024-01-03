import { Request, Response } from 'express';
import ordersService from '../services/ordersService';

const listOrders = async (req: Request, res: Response) : Promise<Response> => {
  const result = await ordersService.listOrders();
  const { type, message } = result;
  return res.status(type).json(message);
};

export default {
  listOrders,
};