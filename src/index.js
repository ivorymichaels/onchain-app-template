import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Main App component
import './index.css'; // Global styles (make sure to create this file for global styles)

// If you're using any context providers or state management, import them here
// import { YourProvider } from './context/YourContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* Wrap your App with any providers if needed */}
    {/* <YourProvider> */}
      <App />
    {/* </YourProvider> */}
  </React.StrictMode>
);
