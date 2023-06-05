import { createTheme, ThemeProvider } from '@mui/material/styles';
import { StoryContext, StoryFn } from '@storybook/react';
import { Provider } from 'react-redux';

import { buildStore } from '../../src/redux/store';

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
