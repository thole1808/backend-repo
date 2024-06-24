"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authMiddleware = (req, res, next) => {
    // Tambahkan logika untuk memverifikasi token di sini
    const token = req.headers.authorization;
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
exports.default = authMiddleware;
