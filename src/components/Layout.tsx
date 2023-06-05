import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

export default () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Button href="/">
              <Typography textAlign="center">Home page</Typography>
            </Button>{' '}
            <Button href="/contact">
              <Typography textAlign="center">Contact page</Typography>
            </Button>{' '}
            <Button href="/not-found">
              <Typography textAlign="center">NOt found page</Typography>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box p={3}>
        <Outlet />
      </Box>
    </div>
  );
};
