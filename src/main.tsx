import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global } from '@emotion/react';
import styles from './styles/global-styles.ts';
import { RouterProvider } from 'react-router-dom';
import router from './router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Global styles={styles} />
    <RouterProvider router={router} />
  </React.StrictMode>
);
