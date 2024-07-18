import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './Homepage';
import { Global } from '@emotion/react'
import { GlobalCss } from './GlobalCss'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Global styles={GlobalCss} />
    <Homepage />
  </React.StrictMode>
);
