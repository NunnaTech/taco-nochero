import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Register from './views/landing_pages/Register';
import Menu from './views/landing_pages/Menu'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Menu />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
