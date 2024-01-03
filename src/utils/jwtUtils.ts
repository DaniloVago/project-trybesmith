import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

const jwtOptions: jwt.SignOptions = {
  expiresIn: '14d',
};

const sign = (id: number, username: string) : string => {
  const token = jwt.sign({ id, username }, JWT_SECRET, jwtOptions);
  return token;
};

export default {
  sign,
};