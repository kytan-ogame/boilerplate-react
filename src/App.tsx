import { CssBaseline } from '@mui/material';
import React from 'react';
import { useRoutes } from 'react-router-dom';

import routes from './routes';

const App = () => {
  const content = useRoutes(routes);

  return (
    <>
      <CssBaseline />
      {content}
    </>
  );
};

export default App;
