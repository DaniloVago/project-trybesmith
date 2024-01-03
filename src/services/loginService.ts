import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import jwtUtils from '../utils/jwtUtils';

const login = async (username: string, password: string): 
Promise<{ type: number, message: { message: string } | { token: string } }> => {
  const user = await UserModel.findOne({ where: { username } });

  if (!user || !bcrypt.compareSync(password, user.dataValues.password)) {
    return { type: 401, message: { message: 'Username or password invalid' } };
  }

  const token = jwtUtils.sign(user.dataValues.id, username);
  return { type: 200, message: { token } };
};

export default {
  login,
};