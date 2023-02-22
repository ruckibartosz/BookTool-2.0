import { Reservation } from '@/Types/reservation';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialStateType = {
    allReservations: Reservation[];
    oneReservation: Reservation | object;
    isLoading: boolean;
};

const initialState: InitialStateType = {
    allReservations: [],
    oneReservation: {},
    isLoading: false
};

export const reservationSlice = createSlice({
    name: 'reservation',
    initialState,
    reducers: {
        changeAllReservationsData: (state, action: PayloadAction<Reservation[]>) => {
            const { payload } = action;
            state.allReservations = payload;
        },
        changeOneReservationData: (state, action: PayloadAction<Reservation>) => {
            const { payload } = action;
            state.oneReservation = payload;
        }
    },
    extraReducers: {
        ['reservation/getAll/pending']: (state) => {
            state.isLoading = true;
        },
        ['reservation/getAll/fulfilled']: (state) => {
            state.isLoading = false;
        },
        ['reservation/getOne/pending']: (state) => {
            state.isLoading = true;
        },
        ['reservation/getOne/fulfilled']: (state) => {
            state.isLoading = false;
        }
    }
});

export const { changeAllReservationsData, changeOneReservationData } = reservationSlice.actions;

export default reservationSlice.reducer;
