import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Captcha from './Captcha';
import DateFlipper from './DateFlipper';
import Car from './car';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Captcha />
    {/* <DateFlipper /> */}
  </React.StrictMode>
);

