import React from 'react';
import ReactApexChart from 'react-apexcharts';

const SalesOverviewChart = () => {
	const chartOptions = {
		chart: {
			type: 'line',
			height: 350,
			toolbar: {
				show: false,
			},
		},
		stroke: {
			curve: 'smooth',
		},
		xaxis: {
			type: 'datetime',
			categories: [
				'2024-02-01T00:00:00.000Z',
				'2024-02-02T00:00:00.000Z',
				'2024-02-03T00:00:00.000Z',
				'2024-02-04T00:00:00.000Z',
				'2024-02-05T00:00:00.000Z',
				// Add more dates as needed
			],
		},
		title: {
			text: 'Sales Overview',
			align: 'left',
		},
		grid: {
			row: {
				colors: ['#f3f3f3', 'transparent'], // Alternating row colors
				opacity: 0.5,
			},
		},
	};

	const chartSeries = [
		{
			name: 'Sales',
			data: [300, 450, 600, 350, 700], // Add your daily sales data
		},
	];

	return (
		<ReactApexChart
			options={chartOptions}
			series={chartSeries}
			type='line'
			height={350}
			width={1200}
		/>
	);
};

export default SalesOverviewChart;
