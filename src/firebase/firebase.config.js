// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-SETTFZ6q_KZ6gGGdJhy5KI3TbiFqUPE",
  authDomain: "gblobel-speck-project.firebaseapp.com",
  projectId: "gblobel-speck-project",
  storageBucket: "gblobel-speck-project.appspot.com",
  messagingSenderId: "1078055308948",
  appId: "1:1078055308948:web:5bf8cd76f6b2621fa2ee81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app