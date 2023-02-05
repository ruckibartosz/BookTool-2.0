import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { changeAllClientsData, changeOneClientData } from '../Slices/clientSlice';
import { API_URL_CLIENT } from '@/Config';

export const getAllClients = createAsyncThunk('client/getAll', async (_, thunkApi) => {
    try {
        const allClientsData = await axios.get(API_URL_CLIENT || '');
        thunkApi.dispatch(changeAllClientsData(allClientsData.data));
    } catch (error) {
        await error;
    }
});

export const getOneClient = createAsyncThunk('client/getOne', async (clientId: string, thunkApi) => {
    try {
        const oneClientData = await axios.get(`${API_URL_CLIENT}/${clientId}`);
        thunkApi.dispatch(changeOneClientData(oneClientData.data));
    } catch (error) {
        await error;
    }
});
