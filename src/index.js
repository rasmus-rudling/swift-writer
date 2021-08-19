import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebase = require('firebase');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAV48knz8MSaZRexxAkInKq-hUzgY38TOA",
    authDomain: "swiftwriter-877d1.firebaseapp.com",
    projectId: "swiftwriter-877d1",
    storageBucket: "swiftwriter-877d1.appspot.com",
    messagingSenderId: "878678634417",
    appId: "1:878678634417:web:45f95556c6c391c5761790",
    measurementId: "G-73WPYJK418"
};

firebase.default.initializeApp(firebaseConfig);
firebase.default.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
