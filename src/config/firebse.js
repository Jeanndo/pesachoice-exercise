import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgCyy-3PfBDQX0WNKZuv9h4RP8jHRGwGg",
  authDomain: "pesa-choice-auth.firebaseapp.com",
  projectId: "pesa-choice-auth",
  storageBucket: "pesa-choice-auth.appspot.com",
  messagingSenderId: "408598485607",
  appId: "1:408598485607:web:321f435a06dcd35dcd52c2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
