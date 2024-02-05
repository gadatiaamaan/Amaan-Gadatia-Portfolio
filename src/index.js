// Import React library
import React from 'react';

// Import ReactDOM client for rendering
import ReactDOM from 'react-dom/client';

// Import the main App component
import App from './App';

// Create a root for React rendering, targeting the 'root' element in the HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component within a StrictMode for additional development checks
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
