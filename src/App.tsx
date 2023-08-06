import React from 'react';
import './App.css';
import MyChart from './Components/MyChart';
import CountriesTable from './Components/CountriesTable';
import Grid from '@mui/material/Unstable_Grid2';
import { AppContainer } from './Styles/AppStyle';


function App() {
	return (
		<Grid>
			<AppContainer >
				<MyChart />
				<CountriesTable />
			</AppContainer>
		</Grid>
	);
}

export default App;
