import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Typography } from '@mui/material';
import { globalActions, globalSelectors } from '@redux/modules/global/slice';

import { useGetCounterDefaultValueQuery } from '../../api';

const Index = () => {
  const counter = useSelector(globalSelectors.getCounter);
  const dispatch = useDispatch();

  const { data: defaultValue } = useGetCounterDefaultValueQuery();

  useEffect(() => {
    if (defaultValue === undefined) return;
    dispatch(globalActions.setValue(defaultValue));
  }, [defaultValue, dispatch]);

  const handleIncrement = () => {
    dispatch(globalActions.increment());
  };

  const handleDecrement = () => {
    dispatch(globalActions.decrement());
  };

  return (
    <div data-testid="home-page-wrapper">
      <Typography variant="h1" component="h1">
        Accueil
      </Typography>
      <Typography variant="body1">
        Compteur: <span data-testid="counter-value">{counter}</span>
      </Typography>
      <Button onClick={handleIncrement} data-testid="increment-counter">
        Incrémenter
      </Button>
      <Button onClick={handleDecrement} data-testid="decrement-counter">
        Décrémenter
      </Button>
    </div>
  );
};

export default Index;
