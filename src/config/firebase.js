import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAigimP_aWqdU2CO2B3j2kA8UAEF7A4jd4",
  authDomain: "chat-app2-e41c9.firebaseapp.com",
  projectId: "chat-app2-e41c9",
  storageBucket: "chat-app2-e41c9.appspot.com",
  messagingSenderId: "935881867795",
  appId: "1:935881867795:web:53cfece909989d61c9f5e6",
  measurementId: "G-2B6HL9YC1D",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
