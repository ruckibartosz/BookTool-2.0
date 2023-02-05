import { configureStore } from '@reduxjs/toolkit';

import sideContextReducer from '@Store/Slices/sideContextSlice';
import contextReducer from '@Store/Slices/contextSlice';
import popupSlice from '@Store/Slices/popupSlice';
import apartmentSlice from '@Store/Slices/apartmentSlice';
import clientSlice from './Slices/clientSlice';
import reservationSlice from './Slices/reservationSlice';

export const store = configureStore({
    reducer: {
        sideContext: sideContextReducer,
        context: contextReducer,
        popup: popupSlice,
        apartment: apartmentSlice,
        client: clientSlice,
        reservation: reservationSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
