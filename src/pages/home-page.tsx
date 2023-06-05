import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Typography } from '@mui/material';
import { globalActions, globalSelectors } from '@redux/modules/global/slice';

const HomePage = () => {
  const counter = useSelector(globalSelectors.getCounter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(globalActions.increment());
  };

  const handleDecrement = () => {
    dispatch(globalActions.decrement());
  };

  return (
    <div>
      <Typography variant="h1" component="h1">
        Accueil -- {process.env.PORT}
      </Typography>
      <Typography variant="body1">Compteur: {counter}</Typography>
      <Button onClick={handleIncrement}>Incrémenter</Button>
      <Button onClick={handleDecrement}>Décrémenter</Button>
    </div>
  );
};

export default HomePage;
