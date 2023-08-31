import React from 'react';

import { renderWithProviders } from '@test-utils/render-with-provider';
import { screen, waitFor } from '@testing-library/react';

import App from '../../app';
import type { Step } from './index';

export const onTheAppUrl = (when: Step) => {
  when(/^I am on the url "(.*)"$/, async (pathname) => {
    renderWithProviders(<App />, {
      routerProps: { initialEntries: [pathname] },
    });
    await waitFor(() => {
      expect(screen.getByTestId('app-main-layout')).toBeInTheDocument();
    });
  });
};
