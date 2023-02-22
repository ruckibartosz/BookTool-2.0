import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { changeAllReservationsData, changeOneReservationData } from '../Slices/reservationSlice';

export const getAllReservations = createAsyncThunk('reservation/getAll', async (_, thunkApi) => {
    try {
        const allReservationsData = await axios.get(process.env.REACT_APP_API_URL_RESERVATION || "");
        thunkApi.dispatch(changeAllReservationsData(allReservationsData.data.data));
    } catch (error) {
        await error;
    }
});

export const getOneReservation = createAsyncThunk('reservation/getOne', async (reservationId: string, thunkApi) => {
    try {
        const oneReservationData = await axios.get(`${process.env.REACT_APP_API_URL_RESERVATION}/${reservationId}`);
        thunkApi.dispatch(changeOneReservationData(oneReservationData.data.data));
    } catch (error) {
        await error;
    }
});
