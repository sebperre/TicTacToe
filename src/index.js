import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./result";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/result" element={<Details />} />
      <Route path="/" element={<App />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
