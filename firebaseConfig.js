import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBkDYB1ukNEMYRDYCzYNzKTx6EHPmDHz_M',
  authDomain: 'sanbui-6b560.firebaseapp.com',
  databaseURL: 'https://sanbui-6b560-default-rtdb.firebaseio.com',
  projectId: 'sanbui-6b560',
  storageBucket: 'sanbui-6b560.appspot.com',
  messagingSenderId: '551587984633',
  appId: '1:551587984633:web:05f9c1f917d553f3bcde28',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
