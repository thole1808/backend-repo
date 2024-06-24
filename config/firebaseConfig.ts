import * as admin from 'firebase-admin';

const serviceAccount = require('./firebase-service-account.json');

const databaseURL = 'https://test-16f4a.firebaseio.com';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: databaseURL
});

const firestore = admin.firestore();


export default firestore;
