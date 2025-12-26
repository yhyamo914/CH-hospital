
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCxZZ4dYqrxJ_rlMcXmZhx5Kwg_ZeYnYog",
    authDomain: "computer-store-4c946.firebaseapp.com",
    projectId: "computer-store-4c946",
    storageBucket: "computer-store-4c946.firebasestorage.app",
    messagingSenderId: "77513680070",
    appId: "1:77513680070:web:2d2c080956a16587c4a3c7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();