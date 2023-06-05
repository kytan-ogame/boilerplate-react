import type { PayloadAction } from '@reduxjs/toolkit';
import { createSelector, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../types';

type Slice = {
  counter: number;
};
export const initialState: Slice = {
  counter: 0,
};

const slice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    increment(state, { payload }: PayloadAction<number | undefined>) {
      state.counter += payload ?? 1;
    },
    decrement(state, { payload }: PayloadAction<number | undefined>) {
      state.counter -= payload ?? 1;
    },
  },
});

export default slice;

const getSlice = (state: RootState) => state[slice.name];

export const globalActions = slice.actions;

export const globalSelectors = {
  getCounter: createSelector(getSlice, (state) => state.counter),
};
