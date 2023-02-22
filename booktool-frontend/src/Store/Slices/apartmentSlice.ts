import { Apartment } from '../../Types/apartment';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialStateType = {
    allApartments: Apartment[];
    oneApartment: Apartment | object;
    isLoading: boolean;
};

const initialState: InitialStateType = {
    allApartments: [],
    oneApartment: {},
    isLoading: false
};

export const apartmentSlice = createSlice({
    name: 'apartment',
    initialState,
    reducers: {
        changeAllApartmentsData: (state, action: PayloadAction<Apartment[]>) => {
            const { payload } = action;
            state.allApartments = payload;
        },
        changeOneApartmentData: (state, action: PayloadAction<Apartment>) => {
            const { payload } = action;
            state.oneApartment = payload;
        }
    },
    extraReducers: {
        ['apartment/getAll/pending']: (state) => {
            state.isLoading = true;
        },
        ['apartment/getAll/fulfilled']: (state) => {
            state.isLoading = false;
        },
        ['apartment/getOne/pending']: (state) => {
            state.isLoading = true;
        },
        ['apartment/getOne/fulfilled']: (state) => {
            state.isLoading = false;
        }
    }
});

export const { changeAllApartmentsData, changeOneApartmentData } = apartmentSlice.actions;

export default apartmentSlice.reducer;
