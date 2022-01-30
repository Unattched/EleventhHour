import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import {initializeApp} from "firebase/app";

initializeApp({
    apiKey: "AIzaSyCQuVK9FMJzAb8xMvRUeB2FQ0jYIDsDffA",
    authDomain: "eleventhhour-96dca.firebaseapp.com",
    projectId: "eleventhhour-96dca",
    storageBucket: "eleventhhour-96dca.appspot.com",
    messagingSenderId: "1063754862953",
    appId: "1:1063754862953:web:b4d630ce7f334997f5adf8",
    measurementId: "G-7RQK828058"
})

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
