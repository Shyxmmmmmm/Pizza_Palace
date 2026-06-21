import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjfOpfrwEJG4TarYTJDAhPCdMZn7bM5hY",
  authDomain: "pizzapalace-27288.firebaseapp.com",
  projectId: "pizzapalace-27288",
  storageBucket: "pizzapalace-27288.firebasestorage.app",
  messagingSenderId: "348509363703",
  appId: "1:348509363703:web:576ec573a34161fcace2f2",
  measurementId: "G-B9Z56WW5HN"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth