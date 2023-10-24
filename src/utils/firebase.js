import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD6UmKPRZiLv8XYEWmr6tTPprIKST3rw5U",
  authDomain: "gear-a0746.firebaseapp.com",
  projectId: "gear-a0746",
  storageBucket: "gear-a0746.appspot.com",
  messagingSenderId: "385359361453",
  appId: "1:385359361453:web:5c893c9ddd4b388f6fdd24",
  measurementId: "G-165R7F4NL5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
