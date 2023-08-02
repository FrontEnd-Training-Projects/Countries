import React from 'react';
import { Box } from "@mui/material";

import {
	CartesianGrid,
	XAxis,
	Tooltip,
	YAxis,
	AreaChart,
	Area,
	ResponsiveContainer,
	Legend,
	Label
} from 'recharts';
import { CountryData, DataChart, TooltipData } from '../Utils/types';
import { useAppSelector } from '../app/hooks';
import { TooltipBox, TooltipDescr, TooltipHeader } from '../Styles/TooltipStyle';

const MyChart = () => {
	const pages: Array<number> = useAppSelector(state => state.pagesReducer);
	const page = pages[0];
	const rowsPerPage = pages[1];
	const allCountriesState: CountryData[] = useAppSelector(state => state.allCountriesReducer).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

	const data1 = allCountriesState.map((c) => {
		const chart: DataChart = {
			name: c.name,
			population: c.population,
			color: "white"
		}
		return chart;
	});

	const tickFormatter = (value: number) => {
		const res = value.toLocaleString().split(",");
		if (res.length === 3) {
			return res[0].concat("M");
		}
		else if (res.length === 4) {
			return res[0].concat(",").concat(res[1]).concat("B");
		}
		return value.toLocaleString();
	};

	const CustomTooltip = ({ active, payload, label }: TooltipData) => {
		if (active) {
			return (
				<TooltipBox>
					<TooltipHeader>{`${label} :`}</TooltipHeader>
					<Box sx={{ display: 'flex' }}>
						<TooltipDescr>Population:</TooltipDescr>
						<p>{payload![0].value.toLocaleString()}</p>
					</Box>
				</TooltipBox>
			);
		}
		return null;
	};

	return (
		<ResponsiveContainer width="80%" height="30%">
			<AreaChart data={data1}>
				<XAxis dataKey="name"
					tick={{ stroke: 'rgb(154 169 175)', strokeWidth: 0.5 }}
				/>
				<YAxis
					tick={{ stroke: 'rgb(154 169 175)', strokeWidth: 0.5 }}
					tickFormatter={tickFormatter}
				>
					<Label angle={-90}
						position="insideBottomLeft"
						value="M-Million/B-Billion"
						style={{ fill: 'rgb(154 169 175)', fontSize: '90%' }}
					>
					</Label>
				</YAxis>
				<CartesianGrid strokeDasharray="3 3" />
				<Tooltip content={<CustomTooltip />} />
				<Legend iconType="square" iconSize={7} />
				<Area type="monotone"
					dataKey="population"
					stroke="#8884d8"
					fillOpacity={0.5}
					fill="#171ed4"
					dot={{ stroke: 'black', strokeWidth: 1 }}
				/>
			</AreaChart>
		</ResponsiveContainer>
	)
}

export default MyChart