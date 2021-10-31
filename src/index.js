import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "../src/assets/css/tailwind.css";
<<<<<<< HEAD
import LandingPage from './views/landing_pages/LandingPage'
=======
import Menu from './views/landing_pages/Dashboard';
>>>>>>> f63944fa7bd5cb69d5c383afa8807d32ef5098a5
import reportWebVitals from './reportWebVitals';
import ShoppingCart from "./views/shopping_cart/ShoppingCart";

ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD
    <ShoppingCart />
=======
    <Menu />
>>>>>>> f63944fa7bd5cb69d5c383afa8807d32ef5098a5
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
