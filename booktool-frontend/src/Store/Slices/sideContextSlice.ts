import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SideContextType, SideContextActionType, SideContextRenderType } from '@Types/sideContext';

interface IDisplayPayloadAction {
    contextType: SideContextType;
}

interface IChangeActionPayloadAction {
    actionType: SideContextActionType;
}

interface IChangeRenderTypeAction {
    renderType: SideContextRenderType
}

const initialState = {
    contextType: window.location.pathname.replace("/", ""),
    actionType: 'none',
    renderType: 'tiles',
    isActive: false,
    isLoading: false
};

export const sideContextSlice = createSlice({
    name: 'sideContext',
    initialState,
    reducers: {
        display: (state) => {
            state.isActive = true;
        },
        hide: (state) => {
            state.isActive = false;
        },
        changeContextType: (state, action: PayloadAction<IDisplayPayloadAction>) => {
            const { payload } = action;
            state.contextType = payload.contextType;
        },
        changeActionType: (state, action: PayloadAction<IChangeActionPayloadAction>) => {
            const { payload } = action;
            state.actionType = payload.actionType;
        },
        changeRenderType: (state, action: PayloadAction<IChangeRenderTypeAction>) => {
            const { payload } = action;
            state.renderType = payload.renderType;
        },
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

export const { display, hide, changeContextType, changeActionType, changeRenderType } =
    sideContextSlice.actions;

export default sideContextSlice.reducer;
