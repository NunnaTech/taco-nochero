import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "../src/assets/css/tailwind.css";
import FloatingButtons from './views/FloatingButtons';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <FloatingButtons />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
