// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl6HA7kIzltfr_NFl7UJ9r07zNVdGmcuY",
  authDomain: "starlight-artistry-client.firebaseapp.com",
  projectId: "starlight-artistry-client",
  storageBucket: "starlight-artistry-client.appspot.com",
  messagingSenderId: "1026043063795",
  appId: "1:1026043063795:web:8e41a36867193bd71d3686"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;