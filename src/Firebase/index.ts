/* eslint-disable prettier/prettier */
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import 'firebase/firestore';
import {
  FIREBASE_API_KEY,
  FIREBASE_PROJECT_ID,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_STORAGE_BUCKET,
} from 'react-native-dotenv';
import AuthService from './AuthService';
import DayDocumentService from './DocumentServices/Day';
import MealDocumentService from './DocumentServices/Meal';
import UserDocumentService from './DocumentServices/User';
import ShoppingListDocumentService from './DocumentServices/ShoppingList';

// const firebaseConfig = {
//   apiKey: FIREBASE_API_KEY,
//   projectId: FIREBASE_PROJECT_ID,
//   authDomain: FIREBASE_AUTH_DOMAIN,
//   databaseURL: FIREBASE_DATABASE_URL,
//   storageBucket: FIREBASE_STORAGE_BUCKET,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDMPPG7Wc3x8l4H9Kf6w5LmylfEO-91-ug",
  authDomain: "nutri-ba991.firebaseapp.com",
  databaseURL: "https://nutri-ba991-default-rtdb.firebaseio.com",
  projectId: "nutri-ba991",
  storageBucket: "nutri-ba991.appspot.com",
  messagingSenderId: "280410786005",
  appId: "1:280410786005:web:5427e316491df5c8a63a5c",
  measurementId: "G-774SFFH5BC"
};


// eslint-disable-next-line jest/require-hook
let myApp = initializeApp(firebaseConfig);

export const dayDocumentService = new DayDocumentService(getFirestore(myApp));
export const mealDocumentService = new MealDocumentService(getFirestore(myApp));
export const userDocumentService = new UserDocumentService(getFirestore(myApp));
export const shoppingListDocumentService = new ShoppingListDocumentService(
  getFirestore(myApp)
);

export const authService = new AuthService(getAuth(), userDocumentService);
