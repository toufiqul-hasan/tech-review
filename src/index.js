import React from 'react';
import ReactDOMClient from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const container = document.getElementById("root");

const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);