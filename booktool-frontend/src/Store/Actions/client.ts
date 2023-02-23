import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { Client } from '@Types/client';
import { changeAllClientsData, changeOneClientData } from '../Slices/clientSlice';

export const getAllClients = createAsyncThunk('client/getAll', async (_, thunkApi) => {
    try {
        const allClientsData = await axios.get(process.env.REACT_APP_API_URL_CLIENT || '');
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

export const deleteClient = createAsyncThunk('client/deleteOne', async (clientId: string, thunkApi) => {
    try {
        axios.delete(`${process.env.REACT_APP_API_URL_CLIENT}/${clientId}`);
        thunkApi.dispatch(getAllClients());
    } catch (error) {
        await error;
    }
});

export const updateClient = createAsyncThunk(
    'client/updateOne',
    async (args: { clientId: string; client: Client }, thunkApi) => {
        try {
            const { clientId, client } = args;

            axios.put(`${process.env.REACT_APP_API_URL_CLIENT}/${clientId}`, { client });
            thunkApi.dispatch(getAllClients());
        } catch (error) {
            await error;
        }
    }
);

export const createClient = createAsyncThunk('client/createOne', async (client: Client, thunkApi) => {
    try {
        axios.post(`${process.env.REACT_APP_API_URL_CLIENT}`, { client });
        thunkApi.dispatch(getAllClients());
    } catch (error) {
        await error;
    }
});
