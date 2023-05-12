import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyADm6NZSnJVfLu5yJr-8x5xQVFVFyZG7vY",
  authDomain: "vanlife-5df79.firebaseapp.com",
  projectId: "vanlife-5df79",
  storageBucket: "vanlife-5df79.appspot.com",
  messagingSenderId: "222537086985",
  appId: "1:222537086985:web:2c30dea5c14b3fb8c3e0d8",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const vansApiCollection = collection(db, "vans");

export const getVans = async () => {
  const querySnapshot = await getDocs(vansApiCollection);
  const vansArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  console.log(vansArr);
  return vansArr;
};

export const getVan = async (id) => {
  const docRef = doc(db, "vans", id);
  const vanSnapshot = await getDoc(docRef);
  return {
    ...vanSnapshot.data(),
    id: vanSnapshot.id,
  };
};

export const getHost = async () => {
  const queryData = query(vansApiCollection, where("hostId", "==", "123"));
  const querySnapshot = await getDocs(queryData);
  const vansArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return vansArr;
};
export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
