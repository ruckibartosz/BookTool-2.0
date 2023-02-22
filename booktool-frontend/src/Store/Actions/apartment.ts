import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { changeAllApartmentsData, changeOneApartmentData } from '../Slices/apartmentSlice';

export const getAllApartments = createAsyncThunk('apartment/getAll', async (_, thunkApi) => {
    try {
        console.log('proc = ', process.env);
        const allApartmentsData = await axios.get(process.env.REACT_APP_API_URL_APARTMENT || "");
        thunkApi.dispatch(changeAllApartmentsData(allApartmentsData.data.data));
    } catch (error) {
        await error;
    }
});

export const getOneApartment = createAsyncThunk('apartment/getOne', async (apartmentId: string, thunkApi) => {
    try {
        const oneApartmentData = await axios.get(`${process.env.REACT_APP_API_URL_APARTMENT}/${apartmentId}`);
        thunkApi.dispatch(changeOneApartmentData(oneApartmentData.data.data));
    } catch (error) {
        await error;
    }
});
