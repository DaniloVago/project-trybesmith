import { Request, Response } from 'express';
import loginService from '../services/loginService';

const login = async (req: Request, res: Response) : Promise<Response> => {
  const { username, password } = req.body;
  const result = await loginService.login(username, password);
  const { type, message } = result;
  return res.status(type).json(message);
};

export default {
  login,
};