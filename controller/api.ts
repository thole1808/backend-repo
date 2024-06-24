import { Request, Response } from 'express';
import { updateUser, fetchUser } from '../repository/userCollection';

export const updateUserData = async (req: Request, res: Response) => {
  const userId = req.params.userId; // Anda bisa mengambil userId dari params atau body request
  const newData = req.body; // Data baru untuk update

  const result = await updateUser(userId, newData);

  if (result) {
    res.status(200).json({ message: 'User data updated successfully' });
  } else {
    res.status(500).json({ message: 'Failed to update user data' });
  }
};

export const fetchUserData = async (req: Request, res: Response) => {
  const userId = req.params.userId; // Anda bisa mengambil userId dari params atau query

  const userData = await fetchUser(userId);

  if (userData) {
    res.status(200).json(userData);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};
