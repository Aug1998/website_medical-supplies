import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './pages/Homepage';
import { Global } from '@emotion/react'
import { GlobalCss } from './GlobalCss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './pages/Product';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Global styles={GlobalCss} />
      <Routes>
        <Route path="/product" element={<Product />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
