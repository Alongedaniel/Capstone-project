import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJK3Y6n2YMBf7QiE9j21XdRoj_co5HU-c",
  authDomain: "marine-clarity-382308.firebaseapp.com",
  projectId: "marine-clarity-382308",
  storageBucket: "marine-clarity-382308.appspot.com",
  messagingSenderId: "715891667616",
  appId: "1:715891667616:web:e3cd86007837b1fb104fc5",
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
