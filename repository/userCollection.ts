import firestore from '../config/firebaseConfig';

const usersCollection = firestore.collection('USERS');

export const updateUser = async (userId: string, newData: any) => {
  try {
    await usersCollection.doc(userId).update(newData);
    return true;
  } catch (error) {
    console.error('Error updating user:', error);
    return false;
  }
};

export const fetchUser = async (userId: string) => {
  try {
    const snapshot = await usersCollection.doc(userId).get();
    if (snapshot.exists) {
      return snapshot.data();
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
};
