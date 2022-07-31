import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYSq1mpp_ZEVrxM5LpeFtDyGohNwGCRRI",
  authDomain: "equinoccio-ludico.firebaseapp.com",
  projectId: "equinoccio-ludico",
  storageBucket: "equinoccio-ludico.appspot.com",
  messagingSenderId: "962488696547",
  appId: "1:962488696547:web:ed5fcaad06af7030814fd6",
  measurementId: "G-VCZYZGGC8Q"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;