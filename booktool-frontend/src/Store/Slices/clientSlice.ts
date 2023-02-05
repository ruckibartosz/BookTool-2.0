import { Client } from '@/Types/client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialStateType = {
    allClients: Client[];
    oneClient: Client | object;
    isLoading: boolean;
};

const initialState: InitialStateType = {
    allClients: [],
    oneClient: {},
    isLoading: false
};

interface IChangeAllClientsData {
    allClients: Client[];
}

interface IChangeOneClientData {
    oneClient: Client;
}

export const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        changeAllClientsData: (state, action: PayloadAction<IChangeAllClientsData>) => {
            const { payload } = action;
            state.allClients = payload.allClients;
        },
        changeOneClientData: (state, action: PayloadAction<IChangeOneClientData>) => {
            const { payload } = action;
            state.oneClient = payload.oneClient;
        }
    }
});

export const { changeAllClientsData, changeOneClientData } = clientSlice.actions;

export default clientSlice.reducer;
