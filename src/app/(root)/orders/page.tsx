'use client';

import { useState } from 'react';

type OrderStatus = 'Pending' | 'In Progress' | 'Delivered' | 'Cancelled';

interface Order {
	id: string;
	customer: string;
	delivery: string;
	items: string;
	time: string;
	status: OrderStatus;
	timer: string;
}

const orders: Order[] = [
	{
		id: 'ORD-12345',
		customer: 'John Smith',
		delivery: 'Express Delivery',
		items: '2x Chicken Salad, 1x Caesar Salad',
		time: '12/15/2023, 12:30 PM',
		status: 'Pending',
		timer: '15 min',
	},
	{
		id: 'ORD-12346',
		customer: 'Emma Wilson',
		delivery: 'Quick Delivery',
		items: '1x Beef Burger, 2x French Fries',
		time: '12/15/2023, 12:25 PM',
		status: 'In Progress',
		timer: '20 min',
	},
	{
		id: 'ORD-12347',
		customer: 'Michael Brown',
		delivery: 'Fast Delivery',
		items: '3x Tuna Sandwich, 1x Apple Pie',
		time: '12/15/2023, 12:20 PM',
		status: 'Delivered',
		timer: '35 min',
	},
	{
		id: 'ORD-12348',
		customer: 'Sarah Davis',
		delivery: 'Express Delivery',
		items: '2x Veggie Pizza, 2x Coke',
		time: '12/15/2023, 12:15 PM',
		status: 'Cancelled',
		timer: '40 min',
	},
	{
		id: 'ORD-12349',
		customer: 'James Wilson',
		delivery: 'Quick Delivery',
		items: '1x Chicken Wrap, 1x Orange Juice',
		time: '12/15/2023, 12:10 PM',
		status: 'Pending',
		timer: '45 min',
	},
	{
		id: 'ORD-12345',
		customer: 'John Smith',
		delivery: 'Express Delivery',
		items: '2x Chicken Salad, 1x Caesar Salad',
		time: '12/15/2023, 12:30 PM',
		status: 'Pending',
		timer: '15 min',
	},
	{
		id: 'ORD-12346',
		customer: 'Emma Wilson',
		delivery: 'Quick Delivery',
		items: '1x Beef Burger, 2x French Fries',
		time: '12/15/2023, 12:25 PM',
		status: 'In Progress',
		timer: '20 min',
	},
	{
		id: 'ORD-12347',
		customer: 'Michael Brown',
		delivery: 'Fast Delivery',
		items: '3x Tuna Sandwich, 1x Apple Pie',
		time: '12/15/2023, 12:20 PM',
		status: 'Delivered',
		timer: '35 min',
	},
	{
		id: 'ORD-12348',
		customer: 'Sarah Davis',
		delivery: 'Express Delivery',
		items: '2x Veggie Pizza, 2x Coke',
		time: '12/15/2023, 12:15 PM',
		status: 'Cancelled',
		timer: '40 min',
	},
	{
		id: 'ORD-12349',
		customer: 'James Wilson',
		delivery: 'Quick Delivery',
		items: '1x Chicken Wrap, 1x Orange Juice',
		time: '12/15/2023, 12:10 PM',
		status: 'Pending',
		timer: '45 min',
	},
];

export default function OrdersPage() {
	const [filter, setFilter] = useState<'All' | OrderStatus>('All');
	const [currentPage, setCurrentPage] = useState(1);
	const entriesPerPage = 5;

	// Filtered orders
	const filteredOrders =
		filter === 'All' ? orders : orders.filter((o) => o.status === filter);

	// Pagination
	const indexOfLast = currentPage * entriesPerPage;
	const indexOfFirst = indexOfLast - entriesPerPage;
	const currentOrders = filteredOrders.slice(indexOfFirst, indexOfLast);
	const totalPages = Math.ceil(filteredOrders.length / entriesPerPage);

	return (
		<div className='p-6 space-y-6 mt-8'>
			{/* Tabs */}
			<div className='flex space-x-3  overflow-scroll md:overflow-hidden py-5 '>
				{['All', 'Pending', 'In Progress', 'Delivered', 'Cancelled'].map(
					(tab) => (
						<button
							key={tab}
							onClick={() => {
								setFilter(tab as any);
								setCurrentPage(1);
							}}
							className={`px-4 py-2 rounded-full text-sm font-medium  ${
								filter === tab
									? 'bg-blue-600 text-white'
									: 'bg-gray-100 text-gray-600 hover:bg-gray-200'
							}`}>
							{tab} Orders
						</button>
					)
				)}
			</div>

			{/* Table */}
			<div className='overflow-x-auto bg-white dark:bg-gray-800 shadow rounded-xl'>
				<table className='w-full border-collapse text-left'>
					<thead className='bg-gray-100 text-nowrap dark:bg-gray-700 text-gray-600 dark:text-gray-300'>
						<tr>
							<th className='p-3'>Order ID</th>
							<th className='p-3'>Customer Name</th>
							<th className='p-3'>Delivery Name</th>
							<th className='p-3'>Lunch Items</th>
							<th className='p-3'>Order Time</th>
							<th className='p-3'>Status</th>
							<th className='p-3'>Timer</th>
						</tr>
					</thead>
					<tbody className='text-nowrap'>
						{currentOrders.map((order) => (
							<tr
								key={order.id}
								className='hover:bg-gray-50 dark:hover:bg-gray-700'>
								<td className='p-3 font-medium text-blue-600'>{order.id}</td>
								<td className='p-3'>{order.customer}</td>
								<td className='p-3'>{order.delivery}</td>
								<td className='p-3'>{order.items}</td>
								<td className='p-3'>{order.time}</td>
								<td className='p-3'>
									<span
										className={`px-2 py-1 text-xs rounded-full ${
											order.status === 'Pending'
												? 'bg-yellow-100 text-yellow-700'
												: order.status === 'In Progress'
												? 'bg-blue-100 text-blue-700'
												: order.status === 'Delivered'
												? 'bg-green-100 text-green-700'
												: 'bg-red-100 text-red-700'
										}`}>
										{order.status}
									</span>
								</td>
								<td className='p-3'>{order.timer}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Footer with entries and pagination */}
			<div className='flex justify-between items-center text-sm text-gray-600 dark:text-gray-300'>
				<p>
					Showing {indexOfFirst + 1} to{' '}
					{Math.min(indexOfLast, filteredOrders.length)} of{' '}
					{filteredOrders.length} entries
				</p>

				<div className='flex items-center space-x-2'>
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
	);
}
