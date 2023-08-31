import 'normalize.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { setupStore } from '@redux/store';

import App from './app';
import theme from './theme';

const store = setupStore();
if (process.env.USE_MOCK) {
  const { worker } = await import('./mocks/browser');
  worker.start({
    serviceWorker: {
      url: '/mock-service-worker.js',
    },
  });
}

const domNode = document.querySelector('#root');
if (domNode === null) {
  throw new Error(' Unable to get the root element for render React');
}
createRoot(domNode).render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
