import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { changeAllClientsData, changeOneClientData } from '../Slices/clientSlice';

export const getAllClients = createAsyncThunk('client/getAll', async (_, thunkApi) => {
    try {
        const allClientsData = await axios.get(process.env.REACT_APP_API_URL_CLIENT || "");
        thunkApi.dispatch(changeAllClientsData(allClientsData.data.data));
    } catch (error) {
        await error;
    }
});

export const getOneClient = createAsyncThunk('client/getOne', async (clientId: string, thunkApi) => {
    try {
        const oneClientData = await axios.get(`${process.env.REACT_APP_API_URL_CLIENT}/${clientId}`);
        thunkApi.dispatch(changeOneClientData(oneClientData.data.data));
    } catch (error) {
        await error;
    }
});
