import { Provider } from 'react-redux';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { buildStore } from '@redux/store';
import type { StoryContext, StoryFn } from '@storybook/react';

export { mswDecorator as WithMockedData } from 'msw-storybook-addon';

const theme = createTheme({
  // Définissez ici votre thème Material-UI
});

export function WithThemeProvider(Component: StoryFn) {
  return (
    <ThemeProvider theme={theme}>
      <Component />
    </ThemeProvider>
  );
}

export function WithRedux(Component: StoryFn, context: StoryContext) {
  return (
    <Provider store={buildStore(context.parameters.redux || {})}>
      <Component />
    </Provider>
  );
}
