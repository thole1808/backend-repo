import { Router } from 'express';
import { updateUserData, fetchUserData } from '../controller/api';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();

// Endpoint untuk update data user
router.put('/update-user-data/:userId', authMiddleware, updateUserData);

// Endpoint untuk fetch data user
router.get('/fetch-user-data/:userId', authMiddleware, fetchUserData);

export default router;
