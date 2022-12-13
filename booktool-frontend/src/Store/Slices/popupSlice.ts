import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IOpenAction {
    id: string;
    data?: Record<string, unknown>;
}

type InitialStateType = {
    id: string;
    [key: string]: any;
    isOpen: boolean;
};

const initialState: InitialStateType = {
    id: '',
    data: {},
    isOpen: false
};

export const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        open: (state, action: PayloadAction<IOpenAction>) => {
            const { payload } = action;
            state.isOpen = true;
            state.id = payload.id;
            state.data = payload.data;
        },

        close: (state) => {
            state.isOpen = false;
            state.id = '';
            state.data = {};
        }
    }
});

export const { open, close } = popupSlice.actions;

export default popupSlice.reducer;
