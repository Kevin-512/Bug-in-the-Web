import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Captcha from './Captcha';
import Car from './car';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Car />
  </React.StrictMode>
);

