import { StoryContext, StoryFn } from '@storybook/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
  console.log('decorators - withRedux >> context', context);
  return (
    <Provider store={buildStore(context.parameters.redux || {})}>
      <Component />
    </Provider>
  );
}
