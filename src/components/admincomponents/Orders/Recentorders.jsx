import React from 'react';

const orders = [
	{
		id: 1,
		productName: 'Watch',
		customer: 'Zemlak',
		price: 150,
		status: 'Delivered',
	},
	{
		id: 2,
		productName: 'phone',
		customer: 'Daniel',
		price: 500,
		status: 'not Delivered',
	},
	{
		id: 3,
		productName: 'laptop',
		customer: ' Leannon',
		price: 1200,
		status: 'inpogress',
	},
	{
		id: 4,
		productName: 'chair',
		customer: 'asad',
		price: 150,
		status: 'Delivered',
	},
	{
		id: 5,
		productName: 'Watch',
		customer: 'Zemlak, Daniel and Leannon',
		price: 150,
		status: 'Delivered',
	},
	{
		id: 6,
		productName: 'Watch',
		customer: 'Zemlak, Daniel and Leannon',
		price: 150,
		status: 'Delivered',
	},
	{
		id: 7,
		productName: 'Watch',
		customer: 'Zemlak, Daniel and Leannon',
		price: 150,
		status: 'Delivered',
	},
	// Add more orders as needed
];

export const Recentorders = () => {
	return (
		<div className='overflow-x-auto w-full text-black'>
			<table className='table'>
				{/* head */}
				<thead className='text-black'>
					<tr>
						<th>
							<h1 className='font-bold'> #order id</h1>
						</th>
						<th>Item</th>
						<th>Customer name</th>
						<th>Price</th>
						<th>Status</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{orders.map((order, index) => (
						<tr key={index}>
							<th>{order.id}</th>
							<td>
								<div className='flex items-center gap-3'>
									<div className='avatar'>
										<div className='mask mask-squircle w-12 h-12'>
											<img
												src='/tailwind-css-component-profile-2@56w.png'
												alt='img'
											/>
										</div>
									</div>
									<div>
										<div className='font-bold'>{order.productName}</div>
									</div>
								</div>
							</td>
							<td>{order.customer}</td>
							<td>{`${order.price} $`}</td>
							<td>
								<span className='badge badge-success'>{order.status}</span>
							</td>
							<th>
								<button className='btn btn-ghost btn-xs border border-black '>
									details
								</button>
							</th>
						</tr>
					))}
				</tbody>

				{/* foot */}
				<tfoot>
					<tr>
						<th>#Order ID</th>
						<th>item</th>
						<th>customer name</th>
						<th>price</th>
						<th>status</th>
						<th></th>
					</tr>
				</tfoot>
			</table>
		</div>
	);
};
