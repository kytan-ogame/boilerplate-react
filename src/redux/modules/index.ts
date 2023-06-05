import { combineReducers } from '@reduxjs/toolkit';
import global from './global/slice';

export const getReducers = () => ({
  [global.name]: global.reducer,
});
const reducers = combineReducers(getReducers());

export default reducers;
