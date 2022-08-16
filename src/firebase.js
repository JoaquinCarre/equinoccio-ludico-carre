import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, getDocs, collection, query, where, limit } from "firebase/firestore";

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

export const getProducts = async (categoryGenre) => {
  if (categoryGenre) {
    return await getProductsByCategoryGenre(categoryGenre);
  } else {
    return await getAllProducts();
  }
};

/* export const getProductById = async (productId) => {
  if (!productId) throw new Error("Missing productId");

  return (await getDoc(doc(db, "items", productId))).data();
}; */

export const getProductsByCategoryGenre = async (categoryGenre) => {
  if (!categoryGenre) throw new Error("Missing categoryGenreId");

  const q = query(collection(db, "items"), where("categoryGenreId", "==", categoryGenre), limit(1));
  return await getDocs(q);
};

export const getAllProducts = async () => {
  const q = query(collection(db, "items"));
  return await getDocs(q);
};