import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialData: string = "";

const dataForSortingSlice = createSlice({
    name: "sortingData",
    initialState: initialData,
    reducers: {
        putDataForSorting(state, action: PayloadAction<string>) {
            state = action.payload;
            return state;
        }
    }
});

export const { putDataForSorting } = dataForSortingSlice.actions;
export const  dataForSortingReducer = dataForSortingSlice.reducer;