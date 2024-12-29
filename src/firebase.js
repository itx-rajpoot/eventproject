import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBvebtO_mwqTHsba_Tt14mPVKIlwJnCIMM",
    authDomain: "final-project-6210.firebaseapp.com",
    projectId: "final-project-6210",
    storageBucket: "final-project-6210.firebasestorage.app",
    messagingSenderId: "531764066534",
    appId: "1:531764066534:web:3753bf17cbe52c25d5e327",
    measurementId: "G-YM35F2X3WE"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };