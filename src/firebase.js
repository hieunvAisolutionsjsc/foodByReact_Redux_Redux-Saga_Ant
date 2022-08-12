import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
 import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWcP6hEzMFanWB0ihxN3tbRKNXWyqgjN8",
  authDomain: "foodimg-13877.firebaseapp.com",
  projectId: "foodimg-13877",
  storageBucket: "foodimg-13877.appspot.com",
  messagingSenderId: "1081506208313",
  appId: "1:1081506208313:web:0f2977dfb709605b264be8",
  measurementId: "G-77VKD27CP2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)