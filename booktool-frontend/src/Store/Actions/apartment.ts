import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { changeAllApartmentsData, changeOneApartmentData } from '../Slices/apartmentSlice';
import { API_URL_APARTMENT } from '@/Config';

export const getAllApartments = createAsyncThunk('apartment/getAll', async (_, thunkApi) => {
    try {
        const allApartmentsData = await axios.get(API_URL_APARTMENT || '');
        thunkApi.dispatch(changeAllApartmentsData(allApartmentsData.data));
    } catch (error) {
        await error;
    }
});

export const getOneApartment = createAsyncThunk('apartment/getOne', async (apartmentId: string, thunkApi) => {
    try {
        const oneApartmentData = await axios.get(`${API_URL_APARTMENT}/${apartmentId}`);
        thunkApi.dispatch(changeOneApartmentData(oneApartmentData.data));
    } catch (error) {
        await error;
    }
});
