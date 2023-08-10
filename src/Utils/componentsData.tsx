import { CountryColumn, CountryFlags } from "./types";
import FormControl from '@mui/material/FormControl';
import { InputLabel, MenuItem, Select } from '@mui/material';

export const columns: CountryColumn[] = [
	{
		id: 'name',
		label: 'Country name',
		minWidth: 100
	},
	{
		id: 'official_name',
		label: 'Official country name',
		minWidth: 80
	},
	{
		id: 'alpha3Code',
		label: 'Alpha code',
		minWidth: 80
	},
	{
		id: 'numericCode',
		label: 'Numeric code',
		minWidth: 80
	},
	{
		id: 'callingCode',
		label: 'Calling code',
		minWidth: 80
	},
	{
		id: 'capital',
		label: 'Capital',
		minWidth: 80
	},
	{
		id: 'region',
		label: 'Region',
		minWidth: 80
	},
	{
		id: 'subregion',
		label: 'Subregion',
		minWidth: 80
	},
	{
		id: 'population',
		label: 'Population',
		minWidth: 80
	},
	{
		id: 'timezones',
		label: 'Timezones',
		minWidth: 80,
		formatUtc: (value: Array<string>) => {
			return (
				<FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
					<InputLabel id="country-utc-lable">UTC</InputLabel>
					<Select
						labelId="country-utc-lable"
						id="country-utc"
						value={value[0]}
					>
						{value.map((utc) => {
							return (
								<MenuItem key={utc} value={utc}>{utc}</MenuItem>
							);
						})}
					</Select>
				</FormControl>
			);
		}
	},
	{
		id: 'flag',
		label: 'Flag',
		minWidth: 100,
		align: 'center',
		formatFlag: (value: CountryFlags) => {
			const flag = value.small;
			return (
				<img src={flag} alt='flag'></img>
			);
		}
	}
];