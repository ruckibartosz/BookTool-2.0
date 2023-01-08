import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ContextType } from '@Types/context';

interface IChangeContextAction {
    context: ContextType;
}

interface IChangeLoadingStatus {
    isLoading: boolean;
}

const initialState = {
    context: window.location.pathname.replace("/", ""),
    isLoading: false
};

export const contextSlice = createSlice({
    name: 'context',
    initialState,
    reducers: {
        changeContextType: (state, action: PayloadAction<IChangeContextAction>) => {
            const { payload } = action;
            state.context = payload.context;
        },

        changeLoadingStatus: (state, action: PayloadAction<IChangeLoadingStatus>) => {
            const { payload } = action;
            state.isLoading = payload.isLoading;
        }
    },
    extraReducers: {
        ['context/changeType/pending']: (state) => {
            state.isLoading = true;
        },
        ['context/changeType/fulfilled']: (state) => {
            state.isLoading = false;
        }
    }
});

export const { changeContextType, changeLoadingStatus } = contextSlice.actions;

export default contextSlice.reducer;
