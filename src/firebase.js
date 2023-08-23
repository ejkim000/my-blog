/* Firebase authentication START */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZDGTT47RO1BVSdv-AvAgSceSDfyvNF_s",
  authDomain: "my-react-blog-ej.firebaseapp.com",
  projectId: "my-react-blog-ej",
  storageBucket: "my-react-blog-ej.appspot.com",
  messagingSenderId: "61067584627",
  appId: "1:61067584627:web:39078730db9d1e1a9bf606"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
/* Firebase authentication END */