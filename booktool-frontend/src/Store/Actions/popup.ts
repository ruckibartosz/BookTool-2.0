import { createAsyncThunk } from '@reduxjs/toolkit';

import { IOpenAction } from '../Slices/popupSlice';
import { open, close } from '@Store/Slices/popupSlice';

export const openPopup = createAsyncThunk('popup/open', async (args: IOpenAction, thunkAPI) => {
    try {
        thunkAPI.dispatch(open({ ...args }));
    } catch (err) {
        await err;
    }
});

export const closePopup = createAsyncThunk('popup/close', async (_, thunkAPI) => {
    try {
        thunkAPI.dispatch(close());
    } catch (err) {
        await err;
    }
});
