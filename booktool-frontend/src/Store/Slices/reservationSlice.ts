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

interface IChangeAllReservationsData {
    allReservations: Reservation[];
}

interface IChangeOneReservationData {
    oneReservation: Reservation;
}

export const reservationSlice = createSlice({
    name: 'reservation',
    initialState,
    reducers: {
        changeAllReservationsData: (state, action: PayloadAction<IChangeAllReservationsData>) => {
            const { payload } = action;
            state.allReservations = payload.allReservations;
        },
        changeOneReservationData: (state, action: PayloadAction<IChangeOneReservationData>) => {
            const { payload } = action;
            state.oneReservation = payload.oneReservation;
        }
    }
});

export const { changeAllReservationsData, changeOneReservationData } = reservationSlice.actions;

export default reservationSlice.reducer;
