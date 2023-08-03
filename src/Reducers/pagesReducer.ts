import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialPages: Array<number> = [];

const pagesSlice = createSlice({
    name: 'pages',
    initialState: initialPages,
    reducers: {
        putPage(state, action: PayloadAction<number>) {
            if (state.length === 0) {
                state.push(action.payload);
            } else {
                state.splice(0, 1, action.payload);
            }
            return state;
        },
        putRowsPerPage(state, action: PayloadAction<number>) {
            if (state.length === 0) {
                state.push(action.payload);
            } else {
                state.splice(1, 1, action.payload);
            }
            return state;
        }
    }
});

export const { putPage, putRowsPerPage } = pagesSlice.actions;
export const pagesReducer = pagesSlice.reducer;