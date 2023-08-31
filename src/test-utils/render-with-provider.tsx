import type { FunctionComponent, JSX, PropsWithChildren } from 'react';
import React from 'react';
import { Provider } from 'react-redux';
import type { MemoryRouterProps } from 'react-router';
import { useLocation } from 'react-router';
import { MemoryRouter } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import type { AppStore, RootState } from '@redux/store';
import { setupStore } from '@redux/store';
import type { PreloadedState } from '@reduxjs/toolkit';
import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';

import theme from '../theme';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  routerProps?: MemoryRouterProps;
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

type Location = ReturnType<typeof useLocation>;
export let currentLocation: Location | undefined;
export const getCurrentLocation = () => currentLocation;
export const setCurrentLocation = (newValue: Location) =>
  (currentLocation = newValue);

const EveryRoutes: FunctionComponent = () => {
  const location = useLocation();
  setCurrentLocation(location);
  return null;
};

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    routerProps = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren): JSX.Element {
    return (
      <Provider store={store}>
        <MemoryRouter {...routerProps}>
          <EveryRoutes />
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </MemoryRouter>
      </Provider>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
