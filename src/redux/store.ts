import { useDispatch } from 'react-redux';

import global from '@redux/modules/global/slice';
import type { PreloadedState } from '@reduxjs/toolkit';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { api } from '../api';

const rootReducer = combineReducers({
  [global.name]: global.reducer,
  [api.reducerPath]: api.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];
export type AppStore = ReturnType<typeof setupStore>;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type AsyncThunkConfig = {
  /** return type for `thunkApi.getState` */
  state?: RootState;
  /** type for `thunkApi.dispatch` */
  dispatch?: AppDispatch;
  /** type of the `extra` argument for the thunk middleware, which will be passed in as `thunkApi.extra` */
  extra?: unknown;
  /** type to be passed into `rejectWithValue`'s first argument that will end up on `rejectedAction.payload` */
  rejectValue?: unknown;
  /** return type of the `serializeError` option callback */
  serializedErrorType?: unknown;
  /** type to be returned from the `getPendingMeta` option callback & merged into `pendingAction.meta` */
  pendingMeta?: unknown;
  /** type to be passed into the second argument of `fulfillWithValue` to finally be merged into `fulfilledAction.meta` */
  fulfilledMeta?: unknown;
  /** type to be passed into the second argument of `rejectWithValue` to finally be merged into `rejectedAction.meta` */
  rejectedMeta?: unknown;
};
