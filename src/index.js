import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "../src/assets/css/tailwind.css";
import Dashboard from './views/landing_pages/Dashboard';
import reportWebVitals from './reportWebVitals';
import ShoppingCart from "./views/shopping_cart/ShoppingCart";

ReactDOM.render(
  <React.StrictMode>
    <ShoppingCart />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
