'use client';

import { useState } from 'react';

interface Order {
	id: string;
	date: string;
	items: string;
	total: string;
	status: 'Delivered' | 'In Transit' | 'Pending';
}

const orders: Order[] = [
	{
		id: 'ORD-2023-8845',
		date: 'Dec 15, 2023',
		items: '3 items',
		total: '$149.99',
		status: 'Delivered',
	},
	{
		id: 'ORD-2023-8766',
		date: 'Dec 8, 2023',
		items: '1 item',
		total: '$59.99',
		status: 'In Transit',
	},
	{
		id: 'ORD-2023-8687',
		date: 'Nov 29, 2023',
		items: '2 items',
		total: '$89.99',
		status: 'Delivered',
	},
	{
		id: 'ORD-2023-8601',
		date: 'Nov 15, 2023',
		items: '4 items',
		total: '$199.99',
		status: 'Delivered',
	},
];

export default function ProfilePage() {
	const [currentPage, setCurrentPage] = useState(1);
	const entriesPerPage = 4;

	const indexOfLast = currentPage * entriesPerPage;
	const indexOfFirst = indexOfLast - entriesPerPage;
	const currentOrders = orders.slice(indexOfFirst, indexOfLast);
	const totalPages = Math.ceil(24 / entriesPerPage); // pretend total orders = 24

	return (
		<div className='p-6 space-y-6'>
			{/* Header */}
			<h1 className='text-lg font-semibold mb-4 flex items-center space-x-2'>
				<span
					role='img'
					aria-label='profile'>
					👤
				</span>
				<span>User Profile</span>
			</h1>

			{/* Profile Card */}
			<div className='flex items-center space-x-4 bg-white dark:bg-gray-800 shadow rounded-xl p-6'>
				<img
					src='https://randomuser.me/api/portraits/men/32.jpg'
					alt='User Avatar'
					className='w-20 h-20 rounded-full'
				/>
				<div>
					<h2 className='text-xl font-semibold'>John Anderson</h2>
					<p className='text-gray-600 dark:text-gray-400'>
						john.anderson@email.com
					</p>
					<p className='text-sm text-gray-500'>Member since January 2023</p>
				</div>
			</div>

			{/* Stats */}
			<div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
				<div className='bg-white dark:bg-gray-800 shadow rounded-lg p-4'>
					<p className='text-sm text-gray-500'>Total Orders</p>
					<p className='text-xl font-bold'>24 orders</p>
				</div>
				<div className='bg-white dark:bg-gray-800 shadow rounded-lg p-4'>
					<p className='text-sm text-gray-500'>Total Spent</p>
					<p className='text-xl font-bold'>$1,849</p>
				</div>
				<div className='bg-white dark:bg-gray-800 shadow rounded-lg p-4'>
					<p className='text-sm text-gray-500'>Reward Points</p>
					<p className='text-xl font-bold'>235 points</p>
				</div>
			</div>

			{/* Personal Info */}
			<div className='bg-white dark:bg-gray-800 shadow rounded-xl p-6'>
				<h3 className='text-lg font-semibold mb-4'>Personal Information</h3>
				<div className='grid sm:grid-cols-2 gap-4 text-sm'>
					<p>
						<span className='font-medium'>Full Name:</span> John Anderson
					</p>
					<p>
						<span className='font-medium'>Email:</span> john.anderson@email.com
					</p>
					<p>
						<span className='font-medium'>Phone:</span> +1 (555) 123-4567
					</p>
					<p>
						<span className='font-medium'>Address:</span> 123 Market Street, San
						Francisco, CA 94105
					</p>
					<p>
						<span className='font-medium'>Preferred Language:</span> English
					</p>
					<p>
						<span className='font-medium'>Currency:</span> USD
					</p>
				</div>
			</div>

			{/* Order History */}
			<div className='bg-white dark:bg-gray-800 shadow rounded-xl p-6'>
				<div className='flex justify-between items-center mb-4'>
					<h3 className='text-lg font-semibold'>Order History</h3>
					<div className='flex space-x-2'>
						<select className='border rounded-md px-3 py-1 text-sm'>
							<option>All Time</option>
							<option>This Month</option>
							<option>This Year</option>
						</select>
						<select className='border rounded-md px-3 py-1 text-sm'>
							<option>All Status</option>
							<option>Delivered</option>
							<option>In Transit</option>
							<option>Pending</option>
						</select>
					</div>
				</div>

				{/* Table */}
				<div className='overflow-x-auto'>
					<table className='w-full border-collapse text-left'>
						<thead className='bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'>
							<tr>
								<th className='p-3'>Order ID</th>
								<th className='p-3'>Date</th>
								<th className='p-3'>Items</th>
								<th className='p-3'>Total</th>
								<th className='p-3'>Status</th>
							</tr>
						</thead>
						<tbody>
							{currentOrders.map((order) => (
								<tr
									key={order.id}
									className='hover:bg-gray-50 dark:hover:bg-gray-700'>
									<td className='p-3 text-blue-600'>{order.id}</td>
									<td className='p-3'>{order.date}</td>
									<td className='p-3'>{order.items}</td>
									<td className='p-3'>{order.total}</td>
									<td className='p-3'>
										<span
											className={`px-2 py-1 text-xs rounded-full ${
												order.status === 'Delivered'
													? 'bg-green-100 text-green-700'
													: order.status === 'In Transit'
													? 'bg-blue-100 text-blue-700'
													: 'bg-yellow-100 text-yellow-700'
											}`}>
											{order.status}
										</span>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				{/* Pagination */}
				<div className='flex justify-between items-center text-sm text-gray-600 dark:text-gray-300 mt-4'>
					<p>
						Showing {indexOfFirst + 1}-{indexOfLast} of 24 orders
					</p>
					<div className='flex space-x-2'>
						{Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
							<button
								key={num}
								onClick={() => setCurrentPage(num)}
								className={`px-3 py-1 rounded ${
									currentPage === num
										? 'bg-blue-600 text-white'
										: 'bg-gray-100 hover:bg-gray-200'
								}`}>
								{num}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
