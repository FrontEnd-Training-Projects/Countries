import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { allCountriesReducer } from '../Reducers/allCountriesReducer';
import { pagesReducer } from '../Reducers/pagesReducer';
import { dataForSortingReducer } from '../Reducers/dataForSortingReducer';


export const store = configureStore({
	reducer: {
		allCountriesReducer: allCountriesReducer,
		pagesReducer: pagesReducer,
		dataForSortingReducer: dataForSortingReducer
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
