
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBoCjXqQFDqLE6GHrvexv4hruwACHl3DgA",
  authDomain: "devlinks-f49d5.firebaseapp.com",
  projectId: "devlinks-f49d5",
  storageBucket: "devlinks-f49d5.appspot.com",
  messagingSenderId: "231587880389",
  appId: "1:231587880389:web:d61ac89c7f0381e91d7fac",
  measurementId: "G-3LW9BZC2ER"
};

const firebaseapp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseapp)
const auth = getAuth(firebaseapp);

export { db, auth };