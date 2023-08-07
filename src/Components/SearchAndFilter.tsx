import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import React, { ChangeEvent, useState, useEffect, FocusEvent } from 'react'
import { MyFromControl, MyTextField } from '../Styles/SearchAndFilterStyle'
import { CountriesData } from '../Utils/types'
import { useAppDispatch } from '../app/hooks'
import { fetchAllCountries, fetchCountryForCapital, fetchCountryForName } from '../Actions/fetchAcions'
import CloseIcon from '@mui/icons-material/Close';

const SearchAndFilter = ({ allCountriesState, sortingData, label }: CountriesData) => {
	const [region, setRegion] = useState('');
	const [searchedCountry, setSearchedCountry] = useState('');
	const [searchedCountryForCapital, setSearchedCountryForCapital] = useState('');
	const dispatch = useAppDispatch();

	const handleChangeCountry = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setSearchedCountry(event.target.value.trim());
	};

	const handleChangeCountryForCapital = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setSearchedCountryForCapital(event.target.value.trim());
	};

	const handleChangeRegion = (event: SelectChangeEvent) => {
		setRegion(event.target.value.toLowerCase() as string);
	};

	useEffect(() => {
		dispatch(fetchCountryForName(searchedCountry, allCountriesState));
		dispatch(fetchCountryForCapital(searchedCountryForCapital, allCountriesState));
		!(searchedCountry || searchedCountryForCapital) && dispatch(fetchAllCountries(sortingData, label));
		
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchedCountry, searchedCountryForCapital]);


	return (
		<Grid container sx={{ maxWidth: '100%', marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
			<Grid>
				<MyTextField
					variant='outlined'
					label='Search you country'
					onBlur={event => handleChangeCountry(event)}
					type="search"
				>
				</MyTextField>
			</Grid>
			<Grid>
				<MyTextField
					variant='outlined'
					label='Search your country for capital'
					onBlur={event => handleChangeCountryForCapital(event)}
					type="search"
				>
				</MyTextField>
			</Grid>
			<Grid>
				<MyFromControl>
					<InputLabel id="demo-simple-select-label">Search countries by region</InputLabel>
					<Select sx={{ color: 'rgb(154 169 175)' }}
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={region}
						label="Region"
						onChange={handleChangeRegion}
					>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
				</MyFromControl>
			</Grid>
		</Grid>
	)
}

export default SearchAndFilter