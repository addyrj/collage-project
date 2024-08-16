import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_FIREBASE_KEY,
  // authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  // appId: import.meta.env.VITE_APP_ID,
  apiKey: "AIzaSyA5XhWNAHEGMK2SBCNgIf3wfdvKQ2ODVd4",
  authDomain: "grocerystore-29a76.firebaseapp.com",
  projectId: "grocerystore-29a76",
  storageBucket: "grocerystore-29a76.appspot.com",
  messagingSenderId: "1009578530889",
  appId: "1:1009578530889:web:fc60affaa6ae33b3d8c798"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

