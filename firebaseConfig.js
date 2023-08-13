import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAUmaUNjQcn85ETdg8oJI7--9AC2smI_l8",
  authDomain: "letstry-ec363.firebaseapp.com",
  projectId: "letstry-ec363",
  storageBucket: "letstry-ec363.appspot.com",
  messagingSenderId: "649036571874",
  appId: "1:649036571874:web:88d3e61ddcc4347c76aabb",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();
export const auth = getAuth();
