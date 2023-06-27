import React from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import { MyChartContainer } from '../Styles/MyChartStyles';
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



const MyChart = () => {
	const data = [
		{
			"name": "Page A",
			"uv": 4000,
			"pv": 2400,
			"color": "black"
		},
		{
			"name": "Page B",
			"uv": 3000,
			"pv": 1398
		},
		{
			"name": "Page C",
			"uv": 2000,
			"pv": 9800
		},
		{
			"name": "Page D",
			"uv": 2780,
			"pv": 3908
		},
		{
			"name": "Page E",
			"uv": 1890,
			"pv": 4800
		},
		{
			"name": "Page F",
			"uv": 2390,
			"pv": 3800
		},
		{
			"name": "Page G",
			"uv": 3490,
			"pv": 4300
		}
	];

	return (
		<Grid>
			<MyChartContainer>
				{/* <MyChartWrapper> */}
					<ResponsiveContainer width="80%" height="50%">
						<BarChart width={1500} height={450} data={data}>
							<CartesianGrid strokeDasharray="3 3"/>
							<XAxis dataKey="name" />
							<YAxis tick={{stroke: 'red', strokeWidth: 1}} />
							<Tooltip />
							<Legend />
							<Bar dataKey="pv" fill="#8884d8" />
							<Bar dataKey="uv" fill="#82ca9d" />
						</BarChart>
					</ResponsiveContainer>
				{/* </MyChartWrapper> */}
			</MyChartContainer>
		</Grid>
	)
}

export default MyChart