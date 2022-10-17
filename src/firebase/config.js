import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
require('dotenv').config()

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyBfm_4TZvMmuOMneD32YO7m5-myshH7n6M",
  authDomain: "ficu-ecommerce.firebaseapp.com",
  projectId: "ficu-ecommerce",
  storageBucket: "ficu-ecommerce.appspot.com",
  messagingSenderId: "794441853650",
  appId: "1:794441853650:web:ae2bdf646b683b33005b0b"
});

export const db = getFirestore(firebaseConfig);