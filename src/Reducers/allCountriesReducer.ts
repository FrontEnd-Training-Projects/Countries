import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CountryData } from "../Utils/types";

const initialCountries: Array<CountryData> = [];

const allCountriesSlice = createSlice({
    name: "countries",
    initialState: initialCountries,
    reducers: {
        putAllCountries(state, action: PayloadAction<CountryData>) {
            
            state.push(action.payload);
            return state;
        }
    }
});

export const { putAllCountries } = allCountriesSlice.actions;
export const allCountriesReducer =  allCountriesSlice.reducer;