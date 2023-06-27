import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchAllCountries } from '../Actions/fetchAcions';
import { CountryColumn, CountryData } from '../Utils/types';
import { Paper, Table, TableContainer, TableHead, TableRow } from '@mui/material';

const CountriesTable = () => {
	const allCountriesState: CountryData[] = useAppSelector(state => state.allCountriesReducer);
	const dispatch = useAppDispatch();
	
	const getQuote = () => {
		dispatch(fetchAllCountries());
	}

	const formatColumnName = (columnName: string): string => {
		const firstLetter = columnName.split('').shift()?.toUpperCase();
		return columnName.split('').splice(0, 1, firstLetter!).join('');
	};

	const columns: CountryColumn[] = [
		{
			id: allCountriesState[0].name,
			label: formatColumnName(allCountriesState[0].name),
			minWidth: 170
		},
	];

	useEffect(() => {
		getQuote();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	console.log(allCountriesState);

	return (
		<Paper sx={{ width: '100%', height: '500px', overflow: 'hidden' }}>
			<TableContainer sx={{ maxHeight: 440 }}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>

						</TableRow>
					</TableHead>
				</Table>
			</TableContainer>
		</Paper>
	)
}

export default CountriesTable