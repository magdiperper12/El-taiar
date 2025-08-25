// app/page.tsx (Next.js 13+ App Router)
// Or pages/index.tsx if using Pages Router

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaCommentAlt, FaPhone } from 'react-icons/fa';
import Link from 'next/link';

interface Delivery {
	id: number;
	name: string;
	area: string;
	orders: number;
	image: string;
}

interface Support {
	id: number;
	name: string;
	time: string;
	type: 'message' | 'call';
	image: string;
}

const deliveries: Delivery[] = [
	{
		id: 1,
		name: 'Magdy',
		area: 'Downtown',
		orders: 3,
		image: '/image/magdi.png',
	},
	{
		id: 2,
		name: 'Sarah',
		area: 'West Side',
		orders: 2,
		image: '/image/magdi.png',
	},
	{
		id: 3,
		name: 'Ahmed',
		area: 'East Side',
		orders: 1,
		image: '/image/magdi.png',
	},
];

const supportList: Support[] = [
	{
		id: 1,
		name: 'Yasser',
		time: '5 min ago',
		type: 'message',
		image: '/image/magdi.png',
	},
	{
		id: 2,
		name: 'Mona Ahmed',
		time: '15 min ago',
		type: 'call',
		image: '/image/magdi.png',
	},
	{
		id: 3,
		name: 'amr ragab',
		time: '1 hour ago',
		type: 'message',
		image: '/image/magdi.png',
	},
];

export default function Dashboard() {
	const [tab, setTab] = useState<'messages' | 'calls'>('messages');

	return (
		<main className='min-h-screen '>
			{/* Orders Section */}
			<div className='bg-white rounded-xl shadow p-6 mb-6'>
				<div className='flex justify-between items-center mb-4'>
					<h2 className='text-lg font-semibold'>Orders</h2>
					<Link
						href={'/neworders'}
						className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700'>
						+ Add New Order
					</Link>
				</div>
				<div className='h-32 border rounded-lg flex items-center justify-center text-gray-400'>
					No orders yet
				</div>
			</div>

			{/* Bottom Grid */}
			<div className='grid md:grid-cols-2 gap-6'>
				{/* Active Deliveries */}
				<div className='bg-white rounded-xl shadow p-6'>
					<h2 className='text-lg font-semibold mb-4'>Active Deliveries</h2>
					<div className='rounded-lg overflow-hidden mb-4'>
						<Image
							src='/image/azure-maps-custom-icon-symbol-layer.jpg'
							alt='map'
							width={600}
							height={300}
							className='object-cover w-full h-48'
						/>
					</div>
					<div className='space-y-3'>
						{deliveries.map((d) => (
							<div
								key={d.id}
								className='flex items-center justify-between'>
								<div className='flex items-center gap-3'>
									<Image
										src={d.image}
										alt={d.name}
										width={40}
										height={40}
										className='rounded-full'
									/>
									<div>
										<p className='font-medium'>{d.name}</p>
										<p className='text-sm text-gray-500'>{d.area}</p>
									</div>
								</div>
								<p className='text-sm text-gray-600'>
									{d.orders} active orders
								</p>
							</div>
						))}
					</div>
				</div>

				{/* Customer Support */}
				<div className='bg-white rounded-xl shadow p-6'>
					<h2 className='text-lg font-semibold mb-4'>Customer Support</h2>
					<div className='flex gap-2 mb-4'>
						<button
							onClick={() => setTab('messages')}
							className={`flex-1 py-2 rounded-lg ${
								tab === 'messages' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'
							}`}>
							Messages
						</button>
						<button
							onClick={() => setTab('calls')}
							className={`flex-1 py-2 rounded-lg ${
								tab === 'calls' ? 'bg-green-100 text-green-600' : 'bg-gray-100'
							}`}>
							Calls
						</button>
					</div>

					<div className='space-y-4'>
						{supportList
							.filter((s) =>
								tab === 'messages' ? s.type === 'message' : s.type === 'call'
							)
							.map((s) => (
								<div
									key={s.id}
									className='flex items-center justify-between'>
									<div className='flex items-center gap-3'>
										<Link href={'/userprofile'}>
											<Image
												src={s.image}
												alt={s.name}
												width={40}
												height={40}
												className='rounded-full'
											/>
											<div>
												<p className='font-medium'>{s.name}</p>
												<p className='text-sm text-gray-500'>{s.time}</p>
											</div>
										</Link>
									</div>
									{s.type === 'message' ? (
										<FaCommentAlt className='text-blue-500' />
									) : (
										<FaPhone className='text-green-500' />
									)}
								</div>
							))}
					</div>
				</div>
			</div>
		</main>
	);
}
