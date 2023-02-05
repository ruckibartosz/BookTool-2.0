import { Apartment } from '@/Types/apartment';
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

interface IChangeAllApartmentsData {
    allApartments: Apartment[];
}

interface IChangeOneApartmentData {
    oneApartment: Apartment;
}

export const apartmentSlice = createSlice({
    name: 'apartment',
    initialState,
    reducers: {
        changeAllApartmentsData: (state, action: PayloadAction<IChangeAllApartmentsData>) => {
            const { payload } = action;
            state.allApartments = payload.allApartments;
        },
        changeOneApartmentData: (state, action: PayloadAction<IChangeOneApartmentData>) => {
            const { payload } = action;
            state.oneApartment = payload.oneApartment;
        }
    }
});

export const { changeAllApartmentsData, changeOneApartmentData } = apartmentSlice.actions;

export default apartmentSlice.reducer;
