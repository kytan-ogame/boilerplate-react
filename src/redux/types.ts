import type { Reducer } from '@reduxjs/toolkit';

import type { getReducers } from './modules';
import type store from './store';

type RootStateType<T extends Record<string, Reducer>> = {
  [P in keyof T]: ReturnType<T[P]>;
};

export type RootState = RootStateType<ReturnType<typeof getReducers>>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
