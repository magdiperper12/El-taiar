'use client';

import { useState } from 'react';
import { FiEdit2, FiTrash2, FiFilter } from 'react-icons/fi';

interface Customer {
	id: string;
	name: string;
	email: string;
	totalOrders: number;
	totalSpent: number;
	lastOrder: string;
	status: 'Active' | 'Inactive';
}

interface Order {
	id: string;
	date: string;
	items: number;
	amount: number;
	delivery: string;
	deliveryCost: string;
	status: 'Delivered' | 'In Transit';
}

const customers: Customer[] = [
	{
		id: 'CUS001',
		name: 'John Smith',
		email: 'john.smith@email.com',
		totalOrders: 12,
		totalSpent: 2450,
		lastOrder: '2024-01-15',
		status: 'Active',
	},
	{
		id: 'CUS002',
		name: 'Sarah Johnson',
		email: 'sarah.j@email.com',
		totalOrders: 8,
		totalSpent: 1850,
		lastOrder: '2024-01-14',
		status: 'Active',
	},
	{
		id: 'CUS003',
		name: 'Michael Brown',
		email: 'm.brown@email.com',
		totalOrders: 15,
		totalSpent: 3200,
		lastOrder: '2024-01-13',
		status: 'Inactive',
	},
];

const orders: Order[] = [
	{
		id: 'ORD001',
		date: '2024-01-15',
		items: 3,
		amount: 245,
		delivery: 'Express Delivery',
		deliveryCost: '$15.00 • 2-3 days',
		status: 'Delivered',
	},
	{
		id: 'ORD002',
		date: '2024-01-14',
		items: 2,
		amount: 180,
		delivery: 'Standard Shipping',
		deliveryCost: '$8.00 • 5-7 days',
		status: 'In Transit',
	},
];

export default function DashboardPage() {
	const [activeCustomer, setActiveCustomer] = useState<Customer>(customers[0]);

	return (
		<div className='p-6 space-y-6 mt-8'>
			{/* Header */}
			<div className='flex justify-between items-center'>
				<button className='bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition'>
					+ Add New Customer
				</button>
				<button className='flex items-center border px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700'>
					<FiFilter className='mr-2' /> Filter
				</button>
			</div>

			{/* Customers Table */}
			<div className='overflow-x-auto bg-white dark:bg-gray-800 shadow rounded-xl'>
				<table className='w-full text-left border-collapse'>
					<thead className='bg-gray-100 text-nowrap dark:bg-gray-700 text-gray-600 dark:text-gray-300'>
						<tr>
							<th className='p-3'>Customer ID</th>
							<th className='p-3'>Customer Name</th>
							<th className='p-3'>Email</th>
							<th className='p-3'>Total Orders</th>
							<th className='p-3'>Total Spent</th>
							<th className='p-3'>Last Order</th>
							<th className='p-3'>Status</th>
							<th className='p-3'>Actions</th>
						</tr>
					</thead>
					<tbody className='text-nowrap'>
						{customers.map((cust) => (
							<tr
								key={cust.id}
								onClick={() => setActiveCustomer(cust)}
								className={`cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 ${
									activeCustomer.id === cust.id
										? 'bg-gray-100 dark:bg-gray-700'
										: ''
								}`}>
								<td className='p-3'>{cust.id}</td>
								<td className='p-3'>{cust.name}</td>
								<td className='p-3'>{cust.email}</td>
								<td className='p-3'>{cust.totalOrders}</td>
								<td className='p-3'>${cust.totalSpent.toFixed(2)}</td>
								<td className='p-3'>{cust.lastOrder}</td>
								<td className='p-3'>
									<span
										className={`px-2 py-1 text-xs rounded-full ${
											cust.status === 'Active'
												? 'bg-green-100 text-green-700'
												: 'bg-gray-200 text-gray-700'
										}`}>
										{cust.status}
									</span>
								</td>
								<td className='p-3 flex space-x-2'>
									<FiEdit2 className='text-blue-500 cursor-pointer' />
									<FiTrash2 className='text-red-500 cursor-pointer' />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Customer Details */}
			<div className='bg-white dark:bg-gray-800 shadow rounded-xl p-6'>
				<h2 className='text-lg font-semibold mb-4'>Customer Details</h2>
				<div className='flex space-x-6 mb-6 text-nowrap'>
					<div>
						<p className='text-sm text-gray-500'>Total Orders</p>
						<p className='text-xl font-bold'>{activeCustomer.totalOrders}</p>
					</div>
					<div>
						<p className='text-sm text-gray-500'>Total Spent</p>
						<p className='text-xl font-bold'>
							${activeCustomer.totalSpent.toFixed(2)}
						</p>
					</div>
					<div>
						<p className='text-sm text-gray-500'>Average Order</p>
						<p className='text-xl font-bold'>
							$
							{(activeCustomer.totalSpent / activeCustomer.totalOrders).toFixed(
								2
							)}
						</p>
					</div>
				</div>

				{/* Orders */}
				<h3 className='font-semibold mb-2'>Recent Orders</h3>
				<div className='overflow-x-auto'>
					<table className='w-full border-collapse text-nowrap'>
						<thead className='bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'>
							<tr>
								<th className='p-3'>Order ID</th>
								<th className='p-3'>Date</th>
								<th className='p-3'>Items</th>
								<th className='p-3'>Amount</th>
								<th className='p-3'>Delivery</th>
								<th className='p-3'>Status</th>
							</tr>
						</thead>
						<tbody>
							{orders.map((order) => (
								<tr
									key={order.id}
									className='hover:bg-gray-50 dark:hover:bg-gray-700'>
									<td className='p-3'>{order.id}</td>
									<td className='p-3'>{order.date}</td>
									<td className='p-3'>{order.items}</td>
									<td className='p-3'>${order.amount.toFixed(2)}</td>
									<td className='p-3'>
										{order.delivery}{' '}
										<span className='text-gray-500 text-sm'>
											{order.deliveryCost}
										</span>
									</td>
									<td className='p-3'>
										<span
											className={`px-2 py-1 text-xs rounded-full ${
												order.status === 'Delivered'
													? 'bg-green-100 text-green-700'
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
			</div>
		</div>
	);
}
