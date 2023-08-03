import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchAllCountries } from '../Actions/fetchAcions';
import { CountryData, CountryFlags } from '../Utils/types';
import { Paper, Table, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import { putPage, putRowsPerPage } from '../Reducers/pagesReducer';
import { columns } from '../Utils/dataConstants';
import Grid from '@mui/material/Unstable_Grid2';
import MenuTable from './MenuTable';

const CountriesTable = () => {
	const allCountriesState: CountryData[] = useAppSelector(state => state.allCountriesReducer);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const dispatch = useAppDispatch();
	
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

	const getQuote = () => {
		dispatch(fetchAllCountries());
	}

	const checkAndSortRows = (lable: string) => {
		if (lable ==='Country name' || lable === 'Population') {
			
		}
	};

	useEffect(() => {
		getQuote();
		dispatch(putPage(page));
		dispatch(putRowsPerPage(rowsPerPage));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Grid container sx={{ maxWidth: '80%', display: 'flex', justifyContent: 'center'}}>
			<Grid >
				<Paper sx={{ width: '100%', minHeight: '300px', overflow: 'hidden', marginTop: '20px' }}>
					<TableContainer sx={{ maxHeight: 440 }}>
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
											{(column.label === 'Country name' || column.label === 'Population') && <MenuTable /> }
										</TableCell>
									))}
								</TableRow>
							</TableHead>
							<TableBody>
								{allCountriesState
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((row) => {
										return (
											<TableRow key={row.name}>
												{columns.map((column) => {
													const value = row[column.id];
													return (
														<TableCell key={column.id} align={column.align}>
															{(column.formatFlag && !Array.isArray(value) && column.formatFlag(value as CountryFlags))
																|| (column.formatUtc && Array.isArray(value) && column.formatUtc(value as Array<string>)) || value.toLocaleString()}
														</TableCell>
													)
												})}
											</TableRow>
										)
									})
								}
							</TableBody>
						</Table>
					</TableContainer>
					<TablePagination
						sx={{ minHeight: '10px' }}
						rowsPerPageOptions={[10, 25, 100]}
						component="div"
						count={allCountriesState.length}
						rowsPerPage={rowsPerPage}
						page={page}
						onPageChange={handleChangePage}
						onRowsPerPageChange={handleChangeRowsPerPage}
					/>
				</Paper >
			</Grid>

		</Grid>
	)
}

export default CountriesTable