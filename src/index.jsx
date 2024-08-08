import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductPage';
import { GlobalCss } from './style/GlobalCss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Global styles={GlobalCss} />
      <Routes>
        <Route path="/product">
          <Route path="/product/:productId" element={<ProductPage />} />
        </Route>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
