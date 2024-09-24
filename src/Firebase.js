// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQDVgP6et5zgS8vZgtOpsgac49RZE9NVc",
  authDomain: "shoppingapp-b4f4b.firebaseapp.com",
  projectId: "shoppingapp-b4f4b",
  storageBucket: "shoppingapp-b4f4b.appspot.com",
  messagingSenderId: "364958092474",
  appId: "1:364958092474:web:cff6e244de80b7219d8683",
  databaseURL:"https://shoppingapp-b4f4b-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);