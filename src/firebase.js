import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9OICULbR52dL03vM59JCYQLxtoFqjHbg",
  authDomain: "incomebooster-f7524.firebaseapp.com",
  projectId: "incomebooster-f7524",
  storageBucket: "incomebooster-f7524.firebasestorage.app",
  messagingSenderId: "323105937334",
  appId: "1:323105937334:web:7e4d38e0fe98dcb05b5317",
  measurementId: "G-L9K5GP40ME"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // This is the 'db' we use everywhere