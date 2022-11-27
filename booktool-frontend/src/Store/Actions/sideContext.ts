import { SideContextType, SideContextRenderType, SideContextActionType } from '@Types/sideContext';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
    display,
    hide,
    changeContextType,
    changeActionType,
    changeRenderType
} from '@Store/Slices/sideContextSlice';

export const changeSideContextType = createAsyncThunk(
    'sideContext/changeType',
    async (contextType: SideContextType, thunkAPI) => {
        try {
            thunkAPI.dispatch(changeContextType({ contextType }));
        } catch (err) {
            await err;
        }
    }
);

export const changeSideContextAction = createAsyncThunk(
    'sideContext/changeAction',
    async (actionType: SideContextActionType, thunkAPI) => {
        try {
            thunkAPI.dispatch(changeActionType({ actionType }));
        } catch (err) {
            await err;
        }
    }
);


export const changeSideContextRenderType = createAsyncThunk(
    'sideContext/changeRenderType',
    async (renderType: SideContextRenderType, thunkAPI) => {
        try {
            thunkAPI.dispatch(changeRenderType({ renderType }));
        } catch (err) {
            await err;
        }
    }
);


export const displaySideContext = createAsyncThunk('sideContext/display', async (_, thunkAPI) => {
    try {
        thunkAPI.dispatch(display());
    } catch (err) {
        await err;
    }
});

export const hideSideContext = createAsyncThunk('sideContext/hide', async (_, thunkAPI) => {
    try {
        thunkAPI.dispatch(hide());
    } catch (err) {
        await err;
    }
});
