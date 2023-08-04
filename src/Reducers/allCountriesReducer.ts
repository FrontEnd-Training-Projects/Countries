import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CountriesData, DataLabel, DataSorting } from "../Utils/types";

const initialAllCountries: CountriesData = {
    allCountriesState: [],
    sortingData: "",
    label: ""
};


const allCountriesSlice = createSlice({
    name: 'allCountries',
    initialState: initialAllCountries,
    reducers: {
        putDataForSorting(state, action: PayloadAction<DataSorting | string>) {
            state.sortingData = action.payload;
            return state;
        },
        putDataLabel(state, action: PayloadAction<DataLabel | string>) {
            state.label = action.payload;
            return state;
        },
        putAllCountries(state, action: PayloadAction<CountriesData>) {
            console.log(state.sortingData)
            console.log(state.label)
            if (state.sortingData === 'Sort ascending' && state.label === 'Country name') {
                state.allCountriesState = action.payload.allCountriesState.slice().sort((a, b) => (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0);
                return state;
            }
            if (state.sortingData === 'Sort descending' && state.label === 'Country name') {
                state.allCountriesState = action.payload.allCountriesState.slice().sort((a, b) => (a.name < b.name) ? 1 : (a.name > b.name) ? -1 : 0);
                return state;
            }
            if (state.sortingData === 'Sort ascending' && state.label === 'Population') {
                state.allCountriesState = action.payload.allCountriesState.slice().sort((a, b) => a.population - b.population);
                return state;
            }
            if (state.sortingData === 'Sort descending' && state.label === 'Population') {
                state.allCountriesState = action.payload.allCountriesState.slice().sort((a, b) => b.population - a.population);
                return state;
            }
            state.allCountriesState = action.payload.allCountriesState;
            return state;
        }
    }
});

export const { putAllCountries, putDataForSorting,  putDataLabel} = allCountriesSlice.actions;
export const allCountriesReducer = allCountriesSlice.reducer;
