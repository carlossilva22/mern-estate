// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: VITE_FIREBASE_API_KEY,
  authDomain: 'mern-estate-4c651.firebaseapp.com',
  projectId: 'mern-estate-4c651',
  storageBucket: 'mern-estate-4c651.firebasestorage.app',
  messagingSenderId: '691802058088',
  appId: '1:691802058088:web:f2a4c06485c42c93437add',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
