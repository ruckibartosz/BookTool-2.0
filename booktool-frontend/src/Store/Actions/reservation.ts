import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { changeAllReservationsData, changeOneReservationData } from '../Slices/reservationSlice';
import { API_URL_RESERVATION } from '@/Config';

export const getAllClients = createAsyncThunk('reservation/getAll', async (_, thunkApi) => {
    try {
        const allClientsData = await axios.get(API_URL_RESERVATION || '');
        thunkApi.dispatch(changeAllReservationsData(allClientsData.data));
    } catch (error) {
        await error;
    }
});

export const getOneClient = createAsyncThunk('client/getOne', async (reservationId: string, thunkApi) => {
    try {
        const oneClientData = await axios.get(`${API_URL_RESERVATION}/${reservationId}`);
        thunkApi.dispatch(changeOneReservationData(oneClientData.data));
    } catch (error) {
        await error;
    }
});
