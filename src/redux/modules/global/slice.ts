import type { RootState } from '@redux/store';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSelector, createSlice } from '@reduxjs/toolkit';

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
    setValue(state, { payload }: PayloadAction<number>) {
      state.counter = payload;
    },
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
