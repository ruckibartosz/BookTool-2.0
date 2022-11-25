import { SideContextRenderType } from '@Types/sideContext';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { displaySideContext, hideSideContext, changeRenderType } from '@Store/Slices/sideContextSlice';

export const changeSideContextType = createAsyncThunk(
    'sideContext/changeType',
    async (renderType: SideContextRenderType, thunkAPI) => {
        try {
            thunkAPI.dispatch(changeRenderType({ renderType }));
        } catch (err) {
            await err;
        }
    }
);

export const display = createAsyncThunk('sideContext/display', async (_, thunkAPI) => {
    try {
        thunkAPI.dispatch(displaySideContext());
    } catch (err) {
        await err;
    }
});

export const hide = createAsyncThunk('sideContext/hide', async (_, thunkAPI) => {
    try {
        thunkAPI.dispatch(hideSideContext());
    } catch (err) {
        await err;
    }
});
