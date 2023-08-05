import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import React, { ChangeEvent, useState, useEffect } from 'react'
import { MyFromControl, MyTextField } from '../Styles/SearchAndFilterStyle'
import { CountriesData, CountryData } from '../Utils/types'
import { useAppDispatch } from '../app/hooks'
import { putAllCountries } from '../Reducers/allCountriesReducer'
import { fetchAllCountries } from '../Actions/fetchAcions'

interface Props {
	[x: string]: any
	allCountries: CountriesData
}

const SearchAndFilter = (allCountries: Props) => {
	const [region, setRegion] = useState('');
	const [serchedCountry, setSearchedCountry] = useState('');
	const [searchedCountryForCapital, setSearchedCountryForCapital] = useState('');
	const dispatch = useAppDispatch();
	const handleChangeCountry = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setSearchedCountry(event.target.value.trim());
	};

	const handleChangeCountryForCapital = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setSearchedCountryForCapital(event.target.value.trim());
	};

	const handleChangeRegion = (event: SelectChangeEvent) => {
		setRegion(event.target.value as string);
	};

	const searchCountry = () => {
		
		

		allCountries.allCountries.allCountriesState.map((country: CountryData) => {
		
			const c: CountryData | null = country.name === serchedCountry ? country : null;
			if (c !== null) {
				const res: CountriesData = {
					allCountriesState: [c],
					sortingData: allCountries.allCountries.sortingData,
					label: allCountries.allCountries.label
				}
				dispatch(putAllCountries(res));
			}
			return c;
		})
		if (serchedCountry === '') {
			console.log( allCountries.allCountries.allCountriesState)
			const res1: CountriesData = {
				allCountriesState: allCountries.allCountries.allCountriesState,
				sortingData: allCountries.allCountries.sortingData,
				label: allCountries.allCountries.label
			};
			dispatch(fetchAllCountries(allCountries.allCountries.sortingData,  allCountries.allCountries.label));
			return res1;
		}
	};

	useEffect(() => {
		searchCountry();
	}, [serchedCountry]);


	return (
		<Grid container sx={{ maxWidth: '100%', marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
			<Grid>
				<MyTextField
					variant='outlined'
					label='Search you country'
					onChange={event => handleChangeCountry(event)}
				>
				</MyTextField>
			</Grid>
			<Grid>
				<MyTextField
					variant='outlined'
					label='Search your country for capital'
					onChange={event => handleChangeCountryForCapital(event)}
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