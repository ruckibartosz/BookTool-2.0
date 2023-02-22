import { Client } from '@/Types/client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialStateType = {
    allClients: Client[];
    oneClient: Client;
    isLoading: boolean;
};

const initialState: InitialStateType = {
    allClients: [],
    oneClient: {
        _id: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        createdAt: "",
    },
    isLoading: false
};

export const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        changeAllClientsData: (state, action: PayloadAction<Client[]>) => {
            const { payload } = action;
            state.allClients = payload;
        },
        changeOneClientData: (state, action: PayloadAction<Client>) => {
            const { payload } = action;
            state.oneClient = payload;
        }
    },
    extraReducers: {
        ['client/getAll/pending']: (state) => {
            state.isLoading = true;
        },
        ['client/getAll/fulfilled']: (state) => {
            state.isLoading = false;
        },
        ['client/getOne/pending']: (state) => {
            state.isLoading = true;
        },
        ['client/getOne/fulfilled']: (state) => {
            state.isLoading = false;
        }
    }
});

export const { changeAllClientsData, changeOneClientData } = clientSlice.actions;

export default clientSlice.reducer;
