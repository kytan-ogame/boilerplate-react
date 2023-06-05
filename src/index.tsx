import 'normalize.css';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';

import App from './app';
import store from './redux/store';
import theme from './theme';

if (process.env.USE_MOCK) {
  const { worker } = await import('./mocks/browser');
  worker.start();
}

const domNode = document.querySelector('#root');
if (domNode === null) {
  throw new Error(' Unable to get the root element for render React');
}
createRoot(domNode).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
