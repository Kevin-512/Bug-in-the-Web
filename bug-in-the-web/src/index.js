import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Captcha from './Captcha';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Captcha />
  </React.StrictMode>
);

