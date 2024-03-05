import React, { useState } from 'react';
const data = [
	{
		bgColor: '#67e8f9',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				strokeWidth={1.5}
				stroke='currentColor'
				className='w-6 h-6'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
				/>
			</svg>
		),
		title: 'Total products',
		value: '1250',
	},
	{
		bgColor: '#67e8f9',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				stroke-width='1.5'
				stroke='currentColor'
				class='w-6 h-6'
			>
				<path
					stroke-linecap='round'
					stroke-linejoin='round'
					d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
				/>
			</svg>
		),
		title: 'Avalible products',
		value: '1500',
	},
	{
		bgColor: '#67e8f9',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				strokeWidth={1.5}
				stroke='currentColor'
				className='w-6 h-6'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z'
				/>
			</svg>
		),
		title: 'Returns',
		value: '12,00',
	},
	{
		bgColor: '#67e8f9',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				strokeWidth={1.5}
				stroke='currentColor'
				className='w-6 h-6'
			>
				{/* SVG path for the first card */}
			</svg>
		),
		title: 'Total Customer',
		value: '12,00',
	},
	{
		bgColor: '#67e8f9',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				strokeWidth={1.5}
				stroke='currentColor'
				className='w-6 h-6'
			>
				{/* SVG path for the first card */}
			</svg>
		),
		title: 'Total sales',
		value: '12,00',
	},
	{
		bgColor: '#67e8f9',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				strokeWidth={1.5}
				stroke='currentColor'
				className='w-6 h-6'
			>
				{/* SVG path for the first card */}
			</svg>
		),
		title: 'Avg sales',
		value: '12,00',
	},
	{
		bgColor: '#67e8f9',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				strokeWidth={1.5}
				stroke='currentColor'
				className='w-6 h-6'
			>
				{/* SVG path for the first card */}
			</svg>
		),
		title: 'Complains',
		value: '12,00',
	},
	{
		bgColor: '#67e8f9',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				strokeWidth={1.5}
				stroke='currentColor'
				className='w-6 h-6'
			>
				{/* SVG path for the first card */}
			</svg>
		),
		title: 'Total Orders',
		value: '12,00',
	},
	{
		bgColor: '#67e8f9',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				strokeWidth={1.5}
				stroke='currentColor'
				className='w-6 h-6'
			>
				{/* SVG path for the first card */}
			</svg>
		),
		title: 'Feedback',
		value: '12,00',
	},

	// Add similar objects for other cards
];
export const StatsTabs = () => {
	const [activeTab, setActiveTab] = useState('Today');

	const handleTabClick = (tabName) => {
		setActiveTab(tabName);
	};
	return (
		<div>
			<div className='flex mb-4 border-b border-gray-200 dark:border-gray-700'>
				{['Today', 'Week', 'Month', 'Year'].map((tab) => (
					<button
						key={tab}
						className={`inline-block p-4 border-b-2 rounded-t-lg ${
							activeTab === tab
								? 'border-purple-600 text-purple-600'
								: 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500'
						} dark:text-gray-400`}
						onClick={() => handleTabClick(tab)}
					>
						{tab.charAt(0).toUpperCase() + tab.slice(1)}
					</button>
				))}
			</div>

			{/* Tab Content */}
			<div className='p-4 rounded-lg'>
				{activeTab === 'Today' && (
					<div class='grid grid-cols-3 gap-4 mb-4'>
						{data.map((item, index) => (
							<div
								key={index}
								className={`flex items-center justify-center h-24 rounded bg-${item.bgColor} text-black border border-gray-300 shadow-md p-4`}
							>
								<div className='flex items-center justify-between gap-1'>
									<div>{item.icon}</div>
									<div>
										<h1>{item.title}</h1>
										<p>{item.value}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
				{activeTab === 'Week' && (
					<div class='grid grid-cols-3 gap-4 mb-4'>
						{data.map((item, index) => (
							<div
								key={index}
								className={`flex items-center justify-center h-24 rounded bg-${item.bgColor} text-black border border-gray-300 shadow-md p-4`}
							>
								<div className='flex items-center justify-between gap-1'>
									<div>{item.icon}</div>
									<div>
										<h1>{item.title}</h1>
										<p>{item.value}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
				{activeTab === 'Month' && (
					<div class='grid grid-cols-3 gap-4 mb-4'>
						{data.map((item, index) => (
							<div
								key={index}
								className={`flex items-center justify-center h-24 rounded bg-${item.bgColor} text-black border border-gray-300 shadow-md p-4`}
							>
								<div className='flex items-center justify-between gap-1'>
									<div>{item.icon}</div>
									<div>
										<h1>{item.title}</h1>
										<p>{item.value}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
				{activeTab === 'Year' && (
					<div class='grid grid-cols-3 gap-4 mb-4'>
						{data.map((item, index) => (
							<div
								key={index}
								className={`flex items-center justify-center h-24 rounded bg-${item.bgColor} text-black border border-gray-300 shadow-md p-4`}
							>
								<div className='flex items-center justify-between gap-1'>
									<div>{item.icon}</div>
									<div>
										<h1>{item.title}</h1>
										<p>{item.value}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};
