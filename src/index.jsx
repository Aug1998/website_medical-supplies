import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductPage';
import { GlobalCss } from './style/GlobalCss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Global styles={GlobalCss} />
      <Routes>
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route exact path="/" element={<Homepage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
