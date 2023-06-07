import { initialize } from 'msw-storybook-addon';

import type { Preview } from '@storybook/react';

initialize({
  serviceWorker: {
    url: '/mock-service-worker.js',
  },
});
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
