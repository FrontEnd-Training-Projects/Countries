import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { allCountriesReducer } from '../Reducers/allCountriesReducer';



export const store = configureStore({
	reducer: {
		allCountriesReducer: allCountriesReducer
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
