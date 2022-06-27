import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBxpIek7hLAU4yOdmAW7BMyGT5sjpOxQ9I",
  authDomain: "new-york-delivery-bdb00.firebaseapp.com",
  projectId: "new-york-delivery-bdb00",
  storageBucket: "new-york-delivery-bdb00.appspot.com",
  messagingSenderId: "858461805259",
  appId: "1:858461805259:web:cd0d8471aaf3d57bf7194e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app) 

export const db = getFirestore(app)

