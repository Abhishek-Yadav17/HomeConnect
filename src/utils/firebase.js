import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDsPejIeNGF3S1blfAbMgFY-robC3MrlFo",
  authDomain: "homeconnect-83bff.firebaseapp.com",
  projectId: "homeconnect-83bff",
  storageBucket: "homeconnect-83bff.firebasestorage.app",
  messagingSenderId: "443161049263",
  appId: "1:443161049263:web:6b3fe5358f7a682917bc5a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
