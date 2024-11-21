import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional, but you can add global styles if you want
import App from './App'; // Import the App component from App.js

// Render the App component inside the element with id="root"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
