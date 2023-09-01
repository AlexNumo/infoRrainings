import React from 'react';
import { Provider } from 'react-redux';
import {store} from './redux/store';
import App from 'App';
import GlobalStyle from 'GlobalStyles';
import { BrowserRouter } from 'react-router-dom';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
    <BrowserRouter basename='/infoRrainings' forceRefresh='true'>
      <GlobalStyle />
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
