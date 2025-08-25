// app/deliveries/page.tsx (App Router)
// أو pages/deliveries.tsx لو بتستخدم Pages Router

'use client';

import { useState } from 'react';
import { FaEdit, FaTrash, FaDownload } from 'react-icons/fa';

interface Delivery {
	id: string;
	name: string;
	orderNumber: string;
	status: 'Delivered' | 'In Transit' | 'Pending';
	amount: number;
	date: string;
}

const deliveries: Delivery[] = [
	{
		id: 'DEL-2024-001',
		name: 'Ahmed',
		orderNumber: 'ORD-2024-001',
		status: 'In Transit',
		amount: 156.0,
		date: '2024-01-15',
	},
	{
		id: 'DEL-2024-002',
		name: 'Mostafa',
		orderNumber: 'ORD-2024-002',
		status: 'Delivered',
		amount: 243.5,
		date: '2024-01-14',
	},
	{
		id: 'DEL-2024-003',
		name: 'Ehab mohamed',
		orderNumber: 'ORD-2024-003',
		status: 'Pending',
		amount: 89.99,
		date: '2024-01-14',
	},
	{
		id: 'DEL-2024-004',
		name: 'Ibrahim',
		orderNumber: 'ORD-2024-004',
		status: 'In Transit',
		amount: 178.25,
		date: '2024-01-13',
	},
	{
		id: 'DEL-2024-005',
		name: 'Omar',
		orderNumber: 'ORD-2024-005',
		status: 'Delivered',
		amount: 324.75,
		date: '2024-01-13',
	},
];

export default function DeliveriesPage() {
	const [selected, setSelected] = useState<Delivery | null>(deliveries[0]);

	const getStatusStyle = (status: Delivery['status']) => {
		switch (status) {
			case 'Delivered':
				return 'bg-green-100 text-green-600';
			case 'In Transit':
				return 'bg-yellow-100 text-yellow-600';
			case 'Pending':
				return 'bg-blue-100 text-blue-600';
			default:
				return 'bg-gray-100 text-gray-600';
		}
	};

	return (
		<main className='min-h-screen bg-gray-50 p-6 mt-8'>
			{/* Header */}
			<div className='flex justify-between items-center mb-6'>
				<h1 className='text-2xl font-semibold'>Deliveries Management</h1>
				<button className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700'>
					+ Create New Delivery
				</button>
			</div>

			{/* Stats Cards */}
			<div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-6'>
				<div className='bg-white p-4 rounded-xl shadow'>
					<p className='text-gray-500'>Total Deliveries</p>
					<h2 className='text-2xl font-bold'>2,456</h2>
					<span className='text-green-500 text-sm'>↑ 12% this month</span>
				</div>
				<div className='bg-white p-4 rounded-xl shadow'>
					<p className='text-gray-500'>Active Deliveries</p>
					<h2 className='text-2xl font-bold'>342</h2>
				</div>
				<div className='bg-white p-4 rounded-xl shadow'>
					<p className='text-gray-500'>Total Revenue</p>
					<h2 className='text-2xl font-bold'>$45,678</h2>
					<span className='text-green-500 text-sm'>↑ 8% this month</span>
				</div>
				<div className='bg-white p-4 rounded-xl shadow'>
					<p className='text-gray-500'>Total Orders</p>
					<h2 className='text-2xl font-bold'>1,890</h2>
				</div>
			</div>

			{/* Search + Export */}
			<div className='flex justify-between items-center mb-4'>
				<input
					type='text'
					placeholder='Search deliveries...'
					className='border px-3 py-2 rounded-lg w-1/3'
				/>
				<button className='flex items-center gap-2 border px-3 py-2 rounded-lg hover:bg-gray-100'>
					<FaDownload /> Export
				</button>
			</div>

			{/* Table */}
			<div className='bg-white rounded-xl shadow overflow-x-auto'>
				<table className='w-full text-left'>
					<thead className='bg-gray-100 text-gray-600 text-sm text-nowrap'>
						<tr>
							<th className='p-3'>Delivery ID</th>
							<th className='p-3'>Deliveries</th>
							<th className='p-3'>Order Number</th>
							<th className='p-3'>Status</th>
							<th className='p-3'>Amount</th>
							<th className='p-3'>Date</th>
							<th className='p-3'>Actions</th>
						</tr>
					</thead>
					<tbody className='text-nowrap'>
						{deliveries.map((d) => (
							<tr
								key={d.id}
								className={`border-t hover:bg-gray-50 cursor-pointer ${
									selected?.id === d.id ? 'bg-blue-50' : ''
								}`}
								onClick={() => setSelected(d)}>
								<td className='p-3'>{d.id}</td>
								<td className='p-3'>{d.name}</td>
								<td className='p-3'>{d.orderNumber}</td>
								<td className='p-3'>
									<span
										className={`px-2 py-1 rounded-lg text-sm ${getStatusStyle(
											d.status
										)}`}>
										{d.status}
									</span>
								</td>
								<td className='p-3'>${d.amount.toFixed(2)}</td>
								<td className='p-3'>{d.date}</td>
								<td className='p-3 flex gap-3'>
									<FaEdit className='text-blue-500 cursor-pointer' />
									<FaTrash className='text-red-500 cursor-pointer' />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Delivery Details */}
			{selected && (
				<div className='bg-white rounded-xl shadow p-6 mt-6 text-nowrap'>
					<h2 className='text-lg font-semibold mb-4 '>Delivery Details</h2>
					<div className='grid md:grid-cols-2 gap-6'>
						{/* Order Info */}
						<div>
							<h3 className='font-semibold mb-2'>Order Information</h3>
							<p>
								<strong>Order Number:</strong> {selected.orderNumber}
							</p>
							<p>
								<strong>Customer:</strong> {selected.name}
							</p>
							<p>
								<strong>Amount:</strong> ${selected.amount.toFixed(2)}
							</p>
							<p>
								<strong>Date:</strong> {selected.date}
							</p>
						</div>

						{/* Delivery Status */}
						<div>
							<h3 className='font-semibold mb-2'>Delivery Status</h3>
							<ul className='space-y-2 text-sm'>
								<li className='flex items-center gap-2'>
									<span className='w-3 h-3 rounded-full bg-green-500'></span>
									Order Placed – Jan 15, 2024 - 09:00 AM
								</li>
								<li className='flex items-center gap-2'>
									<span className='w-3 h-3 rounded-full bg-yellow-500'></span>
									In Transit – Jan 15, 2024 - 02:30 PM
								</li>
								<li className='flex items-center gap-2'>
									<span className='w-3 h-3 rounded-full bg-blue-500'></span>
									Estimated Delivery – Jan 15, 2024 - 06:00 PM
								</li>
							</ul>
						</div>
					</div>

					{/* Actions */}
					<div className='flex gap-4 mt-6'>
						<button className='bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300'>
							Edit
						</button>
						<button className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600'>
							Delete
						</button>
					</div>
				</div>
			)}
		</main>
	);
}
