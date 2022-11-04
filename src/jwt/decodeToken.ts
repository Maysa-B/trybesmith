import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const secret: string = process.env.JWT_SECRET || 'secret';

const decodeToken = (token:string) => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (err) {
    return null;
  }
};

export default decodeToken;