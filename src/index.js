import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import reactDOM from 'react-dom';
import './style.css';
import App from './App';



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// const element = <h1> Alok Here </h1>
// reactDOM.render(element, document.getElementById('root'));


// reactDOM.render(<Counter />, document.getElementById('root'));


