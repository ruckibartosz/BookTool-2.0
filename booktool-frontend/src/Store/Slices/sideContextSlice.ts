import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SideContextRenderType } from '@Types/sideContext';

interface IDisplayPayloadAction {
    renderType: SideContextRenderType;
}

const initialState = {
    isActive: true,
    renderType: 'clients'
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
    }
});

export const { displaySideContext, hideSideContext, changeRenderType } = sideContextSlice.actions;

export default sideContextSlice.reducer;
