import { createAsyncThunk } from '@reduxjs/toolkit';

import { ContextType } from '@Types/context';
import { changeContextType } from '@Store/Slices/contextSlice';

export const changeType = createAsyncThunk('context/changeType', async (context: ContextType, thunkAPI) => {
    try {
        thunkAPI.dispatch(changeContextType({ context }));
    } catch (err) {
        await err;
    }
});
