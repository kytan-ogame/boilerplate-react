import { Reducer } from '@reduxjs/toolkit';
import { getReducers } from './modules';
import store from './store';

type RootStateType<T extends Record<string, Reducer>> = {
  [P in keyof T]: ReturnType<T[P]>;
};

export type RootState = RootStateType<ReturnType<typeof getReducers>>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
