import { configureStore } from '@reduxjs/toolkit';

import { api } from '../api';
import { getReducers } from './modules';
import type { RootState } from './types';

export function buildStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: { ...getReducers() },
    preloadedState,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(api.middleware);
    },
  });
}

const store = buildStore();
export default store;
