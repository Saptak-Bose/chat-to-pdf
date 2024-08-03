import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDoE5A70n5vJnZAG87HVH-TR34TP1RO_kk",
  authDomain: "chat-to-pdf-da9d8.firebaseapp.com",
  projectId: "chat-to-pdf-da9d8",
  storageBucket: "chat-to-pdf-da9d8.appspot.com",
  messagingSenderId: "962595929484",
  appId: "1:962595929484:web:92a0e56c490cf247302aa9",
  measurementId: "G-6QDYKTKY6P",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
