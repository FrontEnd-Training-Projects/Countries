import React from 'react';

import {
	BarChart,
	CartesianGrid,
	XAxis,
	Tooltip,
	YAxis,
	Legend,
	Bar,
	ResponsiveContainer
} from 'recharts';
import { CountryData } from '../Utils/types';
import { useAppSelector } from '../app/hooks';

interface DataChart {
	name: string,
	population: string | number,
	yAxis: Array<number>,
	color?: string
}


const MyChart = () => {
	const pages: Array<number> = useAppSelector(state => state.pagesReducer);
	
	const allCountriesState: CountryData[] = useAppSelector(state => state.allCountriesReducer).slice(pages[0] * pages[1], pages[0] * pages[1] + pages[1]);
	console.log(allCountriesState);

	const data1 = allCountriesState.map((c) => {
		const chart: DataChart = {
			name: c.name,
			population: c.population,
			yAxis: [0, 10_000, 100_000, 1_000_000, 10_000_000],
			color: "white"
		}
		return chart;
	})

	const data = [
		{
			"name": "Page A",
			"uv": 4000,
			"Population": 2400,
			"color": "black"
		},
		{
			"name": "Page B",
			"uv": 3000,
			"Population": 1398
		},
		{
			"name": "Page C",
			"uv": 2000,
			"Population": 9800
		},
		{
			"name": "Page D",
			"uv": 2780,
			"Population": 3908
		},
		{
			"name": "Page E",
			"uv": 1890,
			"Population": 4800
		},
		{
			"name": "Page F",
			"uv": 2390,
			"Population": 3800
		},
		{
			"name": "Page G",
			"uv": 3490,
			"Population": 4300
		}
	];

	return (
		<ResponsiveContainer width="80%" height="30%">
			<BarChart width={1500} data={data1}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis tick={{ stroke: 'red', strokeWidth: 1 }} dataKey="population" />
				<Tooltip />
				<Legend />
				<Bar dataKey="population" fill="#8884d8" />
				{/* <Bar dataKey="uv" fill="#82ca9d" /> */}
			</BarChart>
		</ResponsiveContainer>
	)
}

export default MyChart