import { configureStore } from '@reduxjs/toolkit';

import sideContextReducer from '@Store/Slices/sideContextSlice';
import contextReducer from '@Store/Slices/contextSlice';

export const store = configureStore({
    reducer: {
        sideContext: sideContextReducer,
        context: contextReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
