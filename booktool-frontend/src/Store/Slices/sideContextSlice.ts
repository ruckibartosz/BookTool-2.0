import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SideContextRenderType } from '@Types/sideContext';

interface IDisplayPayloadAction {
    renderType: SideContextRenderType;
}

const initialState = {
    isActive: false,
    renderType: 'dashboard',
    isLoading: false
};

export const sideContextSlice = createSlice({
    name: 'sideContext',
    initialState,
    reducers: {
        displaySideContext: (state) => {
            state.isActive = true;
        },
        hideSideContext: (state) => {
            state.isActive = false;
        },
        changeRenderType: (state, action: PayloadAction<IDisplayPayloadAction>) => {
            const { payload } = action;
            state.renderType = payload.renderType;
        }
    },
    extraReducers: {
        ['sideContext/changeType/pending']: (state) => {
            state.isLoading = true;
        },
        ['sideContext/changeType/fulfilled']: (state) => {
            state.isLoading = false;
        }
    }
});

export const { displaySideContext, hideSideContext, changeRenderType } = sideContextSlice.actions;

export default sideContextSlice.reducer;
