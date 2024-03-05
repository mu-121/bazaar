import React from 'react';
import { Topcontainair } from './Topcontainair';
import { StatsTabs } from './StatsTabs';
import Barchart from '../Charts/Barchart';
import SalesOverviewChart from '../Charts/Linechart';
import InventoryLevelChart from '../Charts/Areachart';
import TopSellingProductsChart from '../Charts/StackedBarchart';
import { Recentorders } from '../Orders/Recentorders';

export const Dashboard = () => {
	return (
		<>
			<div className='p-4 sm:ml-64'>
				<div className='p-4 mt-14'>
					<Topcontainair />
					<StatsTabs />

					<div className='flex items-center justify-center '>
						<Barchart />
					</div>
					<div className='flex items-center justify-center '>
						<SalesOverviewChart />
					</div>
					<div className='grid grid-cols-2 gap-4'>
						<div className='flex items-center justify-center '>
							<InventoryLevelChart />
						</div>
						<div className='flex items-center justify-center '>
							<TopSellingProductsChart />
						</div>
					</div>

					<div className='text-black font-bold text-2xl mt-3'>
						Recent Transactions
					</div>

					<div className='flex items-center justify-center'>
						<Recentorders />
					</div>
				</div>
			</div>
		</>
	);
};
