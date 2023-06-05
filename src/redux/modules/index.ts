import { api } from '../../api';
import global from './global/slice';

export const getReducers = () => ({
  [global.name]: global.reducer,
  [api.reducerPath]: api.reducer,
});

export default getReducers;
