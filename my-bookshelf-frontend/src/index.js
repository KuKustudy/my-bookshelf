import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// this is a file that load the app, all code logics are witten in App.js though
// we want a separate file from index to make this entry point file clear
// and concise
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

