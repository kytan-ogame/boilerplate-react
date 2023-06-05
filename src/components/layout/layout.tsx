import clsx from 'clsx';
import React from 'react';
import { Outlet } from 'react-router-dom';

import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

import s from './layout.module.scss';

interface Props {
  className?: string;
}

const Layout = (props: Props) => {
  const { className } = props;

  return (
    <div className={clsx(className, s.root)}>
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
              <Typography textAlign="center">Not found page</Typography>
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

export default Layout;
