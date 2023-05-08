import { configureStore } from "@reduxjs/toolkit";
import mobilePageSelectedReducer from "@/layouts/mobile/state/pageSelectedSlice";
// ...

export const store = configureStore({
  reducer: { mobilePageSelected: mobilePageSelectedReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
