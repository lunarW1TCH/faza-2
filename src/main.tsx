import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Global } from '@emotion/react';
import styles from './global-styles.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Global styles={styles} />
    <App />
  </React.StrictMode>
);
