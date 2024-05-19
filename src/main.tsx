import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Global } from '@emotion/react';

import App from './App';
import styles from './styles/global-styles';

ReactDOM.createRoot(document.getElementsByTagName('body')[0]!).render(
  <React.StrictMode>
    <Global styles={styles} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
