import { configureStore } from "@reduxjs/toolkit";

import sideContextReducer from "@Store/Slices/sideContextSlice";

export const store = configureStore({
  reducer: {
    sideContext: sideContextReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;