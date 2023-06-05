import { Provider } from 'react-redux';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { buildStore } from '@redux/store';
import type { StoryContext, StoryFn } from '@storybook/react';

const theme = createTheme({
  // Définissez ici votre thème Material-UI
});

export function withThemeProvider(Component: StoryFn) {
  return (
    <ThemeProvider theme={theme}>
      <Component />
    </ThemeProvider>
  );
}

export function withRedux(Component: StoryFn, context: StoryContext) {
  return (
    <Provider store={buildStore(context.parameters.redux || {})}>
      <Component />
    </Provider>
  );
}
