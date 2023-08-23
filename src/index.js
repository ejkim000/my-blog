import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* Firebase authentication START */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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

/* Firebase authentication END */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
