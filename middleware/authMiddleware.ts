import { Request, Response, NextFunction } from 'express';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Tambahkan logika untuk memverifikasi token di sini
  const token = req.headers.authorization;
  console.log(token);

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Di sini tambahkan logika untuk memverifikasi token
  // Contoh sederhana:
  // if (token !== 'valid_token') {
  //   return res.status(401).json({ message: 'Unauthorized' });
  // }

  next();
};

export default authMiddleware;
