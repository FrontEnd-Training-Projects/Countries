import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CountryData } from "../Utils/types";

const initialAllCountries: Array<CountryData> = [];

const allCountriesSlice = createSlice({
    name: 'allCountries',
    initialState: initialAllCountries,
    reducers: {
        putAllCountries(state, action: PayloadAction<Array<CountryData>>) {
            state = action.payload;
            return state;
        }
    }
});

export const { putAllCountries } = allCountriesSlice.actions;
export const allCountriesReducer = allCountriesSlice.reducer;