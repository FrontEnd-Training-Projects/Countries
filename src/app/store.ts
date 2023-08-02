import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { allCountriesReducer } from '../Reducers/allCountriesReducer';
import { pagesReducer } from '../Reducers/pagesReducer';


export const store = configureStore({
	reducer: {
		allCountriesReducer: allCountriesReducer,
		pagesReducer: pagesReducer
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
