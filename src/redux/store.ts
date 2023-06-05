import { configureStore } from '@reduxjs/toolkit';
import reducer from './modules';
import { RootState } from './types';

export function buildStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer,
    preloadedState,
  });
}

const store = buildStore();
export default store;
