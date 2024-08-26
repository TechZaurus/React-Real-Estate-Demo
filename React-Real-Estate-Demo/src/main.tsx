import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './fonts/Capitolium.otf';
import './fonts/Melikan.otf';
import '@pigment-css/react/styles.css'
import '../index.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);
