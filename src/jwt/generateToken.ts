import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const secret: string = process.env.JWT_SECRET || 'secret';

const generateToken = (payload:object) => {
  try {
    const token = jwt.sign(payload, secret);
    return token;
  } catch (err) {
    console.log(err);
  }
};

export default generateToken;