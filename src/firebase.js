// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgvIG-0DYDTI0h7LUEpXZ22IPZhFeuRHY",
  authDomain: "spread-399505.firebaseapp.com",
  projectId: "spread-399505",
  storageBucket: "spread-399505.appspot.com",
  messagingSenderId: "945334151778",
  appId: "1:945334151778:web:f352a710c046ed24867f3b",
  measurementId: "G-BT70P5X3WZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
