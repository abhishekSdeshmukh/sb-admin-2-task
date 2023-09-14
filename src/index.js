import React from 'react';
import ReactDOM from 'react-dom/client';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Dashboard from './Dashboard'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dashboard/>  
  </React.StrictMode>
);
