import { Router } from 'express';
import loginController from '../controllers/loginController';
import validateLogin from '../middlewares/validateLogin';

const loginRouter = Router();

loginRouter.post('/', validateLogin, loginController.login);

export default loginRouter;
