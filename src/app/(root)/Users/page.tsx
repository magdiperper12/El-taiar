'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

type User = {
	id: number;
	image: string;
	name: string;
	email: string;
	status: 'normal' | 'notary' | 'blocked';
};

const mockUsers: User[] = [
	{
		id: 1,
		image: '/image/magdi.png',
		name: 'محمد أحمد',
		email: 'm.ahmed@email.com',
		status: 'notary',
	},
	{
		id: 2,
		image: '/image/magdi.png',
		name: 'سارة محمد',
		email: 'sara@email.com',
		status: 'normal',
	},
	{
		id: 3,
		image: '/image/magdi.png',
		name: 'أحمد علي',
		email: 'ahmed@email.com',
		status: 'blocked',
	},
	{
		id: 4,
		image: '/image/magdi.png',
		name: 'ليلى عمر',
		email: 'layla@email.com',
		status: 'normal',
	},
	{
		id: 5,
		image: '/image/magdi.png',
		name: 'خالد عادل',
		email: 'khaled@email.com',
		status: 'notary',
	},
];

const UsersList = () => {
	const [search, setSearch] = useState('');
	const [filter, setFilter] = useState<'all' | 'notary' | 'blocked'>('all');

	const filteredUsers = mockUsers.filter((user) => {
		const matchesSearch =
			user.name.toLowerCase().includes(search.toLowerCase()) ||
			user.email.toLowerCase().includes(search.toLowerCase());

		const matchesFilter =
			filter === 'all' ||
			(filter === 'notary' && user.status === 'notary') ||
			(filter === 'blocked' && user.status === 'blocked');

		return matchesSearch && matchesFilter;
	});

	return (
		<div className='p-6 bg-gray-50 min-h-screen'>
			<motion.h2
				className='text-2xl font-bold mb-4 text-gray-700'
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}>
				المستخدمون
			</motion.h2>

			{/* Search + Buttons */}
			<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6'>
				<input
					type='text'
					placeholder='ابحث عن مستخدم...'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className='w-full sm:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-indigo-500 text-darkprimary'
				/>

				<div className='flex gap-2'>
					<button
						onClick={() => setFilter('notary')}
						className={`px-4 py-2 rounded-md text-sm font-medium ${
							filter === 'notary'
								? 'bg-indigo-600 text-white'
								: 'bg-indigo-100 text-indigo-700'
						}`}>
						Notaries
					</button>
					<button
						onClick={() => setFilter('blocked')}
						className={`px-4 py-2 rounded-md text-sm font-medium ${
							filter === 'blocked'
								? 'bg-red-600 text-white'
								: 'bg-red-100 text-red-700'
						}`}>
						Block
					</button>
					<button
						onClick={() => setFilter('all')}
						className={`px-4 py-2 rounded-md text-sm font-medium ${
							filter === 'all'
								? 'bg-gray-600 text-white'
								: 'bg-gray-100 text-gray-700'
						}`}>
						الكل
					</button>
				</div>
			</div>

			{/* Users List */}
			<div className='grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
				{filteredUsers.length > 0 ? (
					filteredUsers.map((user) => (
						<motion.div
							key={user.id}
							className='bg-white shadow p-4 rounded-xl border text-center'
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}>
							{' '}
							<div className='w-16 h-16 rounded-full overflow-hidden bg-gray-200 m-auto'>
								<img
									src={user.image}
									alt={user.name}
									className='m-auto  object-cover'
								/>
							</div>
							<p className='font-semibold text-gray-800'>{user.name}</p>
							<p className='text-sm text-gray-500'>{user.email}</p>
							<p className='text-xs text-gray-400 mt-1'>
								الحالة:{' '}
								{user.status === 'notary'
									? 'موثّق'
									: user.status === 'blocked'
									? 'محظور'
									: 'عادي'}
							</p>
							<Link
								href={'/Profile'}
								className='text-white bg-gray-500 px-4 py-1 text-lg my-2 rounded-xl hover:bg-gray-800 transition-all'>
								Visit the account
							</Link>
						</motion.div>
					))
				) : (
					<p className='text-gray-500'>لا يوجد مستخدمون مطابقون للبحث.</p>
				)}
			</div>
		</div>
	);
};

export default UsersList;
