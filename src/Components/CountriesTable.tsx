import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchAllCountries } from '../Actions/fetchAcions';
import { CountryColumn, CountryData, CountryFlags } from '../Utils/types';
import { Box, FormControl, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { putPage, putRowsPerPage } from '../Reducers/pagesReducer';
import { columns } from '../Utils/componentsData';

const CountriesTable = () => {
	const allCountriesState: CountryData[] = useAppSelector((state: { allCountriesReducer: Array<CountryData> }) => state.allCountriesReducer);
	const dispatch = useAppDispatch();
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	const getQuote = () => {
		dispatch(fetchAllCountries());
	}

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
		dispatch(putPage(newPage));
	};

	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
		dispatch(putRowsPerPage(+event.target.value));
		dispatch(putPage(0));
	};

	useEffect(() => {
		getQuote();
		dispatch(putPage(page));
		dispatch(putRowsPerPage(rowsPerPage));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		
		<Paper sx={{ width: '80%', height: '750px', overflow: 'hidden', marginTop: '50px' }}>
			<TableContainer sx={{ maxHeight: 700 }}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							{columns.map((column) => (
								<TableCell
									key={column.id}
									style={{ minWidth: column.minWidth }}
									align={column.align}
								>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{allCountriesState
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((row) => {
								return (
									<TableRow hover role="checkbox" tabIndex={-1} key={row.alpha3Code}>
										{columns.map((column) => {
											const value = row[column.id];
											return (
												<TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
													{(column.formatFlag && !Array.isArray(value) && column.formatFlag(value as CountryFlags))
														|| (column.formatUtc && Array.isArray(value) && column.formatUtc(value as Array<string>)) || value.toLocaleString()}
												</TableCell>
											);
										})}
									</TableRow>
								);
							})}
						
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[10, 25, 100]}
				component="div"
				count={allCountriesState.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Paper>
	)
}

export default CountriesTable