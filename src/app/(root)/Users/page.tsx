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
		<div className='p-6 bg-primary dark:bg-darkprimary min-h-screen transition-colors duration-300'>
			<motion.h2
				className='text-2xl font-bold mb-4 text-forth dark:text-darkforth'
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
					className='w-full sm:w-1/2 px-4 py-2 border border-secoundry rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-third focus:border-third text-third dark:text-darkthird dark:bg-darkprimary'
				/>

				<div className='flex gap-2'>
					<button
						onClick={() => setFilter('notary')}
						className={`px-4 py-2 rounded-md text-sm font-medium ${
							filter === 'notary'
								? 'bg-third text-primary'
								: 'bg-secoundry text-third dark:bg-darksecoundry dark:text-darkthird'
						}`}>
						Notaries
					</button>
					<button
						onClick={() => setFilter('blocked')}
						className={`px-4 py-2 rounded-md text-sm font-medium ${
							filter === 'blocked'
								? 'bg-red-600 text-white' // يمكنك تعديل هذه لتستخدم ألوانك إذا تريد
								: 'bg-secoundry text-third dark:bg-darksecoundry dark:text-darkthird'
						}`}>
						Block
					</button>
					<button
						onClick={() => setFilter('all')}
						className={`px-4 py-2 rounded-md text-sm font-medium ${
							filter === 'all'
								? 'bg-forth text-primary'
								: 'bg-secoundry text-third dark:bg-darksecoundry dark:text-darkthird'
						}`}>
						الكل
					</button>
				</div>
			</div>

			{/* Users List */}
			{filteredUsers.length > 0 ? (
				<div className='grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
					{filteredUsers.map((user) => (
						<motion.div
							key={user.id}
							className='bg-secoundry dark:bg-darksecoundry shadow p-4 rounded-xl border border-third dark:border-darkthird text-center transition-colors'
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}>
							<div className='w-16 h-16 rounded-full overflow-hidden bg-third dark:bg-darkthird m-auto relative'>
								<Image
									src={user.image}
									alt={user.name}
									fill
									style={{ objectFit: 'cover' }}
									sizes='64px'
								/>
							</div>
							<p className='font-semibold text-primary dark:text-darkprimary mt-2'>
								{user.name}
							</p>
							<p className='text-sm text-third dark:text-darkthird'>
								{user.email}
							</p>
							<p className='text-xs text-third dark:text-darkthird mt-1'>
								الحالة:{' '}
								{user.status === 'notary'
									? 'موثّق'
									: user.status === 'blocked'
									? 'محظور'
									: 'عادي'}
							</p>
							<Link
								href='/profile'
								className='inline-block mt-2 bg-third dark:bg-darkthird text-primary dark:text-darkprimary px-4 py-1 text-lg rounded-xl hover:bg-primary hover:text-forth dark:hover:bg-primary dark:hover:text-forth transition-colors'>
								Visit the account
							</Link>
						</motion.div>
					))}
				</div>
			) : (
				<p className='text-center text-third dark:text-darkthird mt-10'>
					لا يوجد مستخدمون مطابقون للبحث.
				</p>
			)}
		</div>
	);
};

export default UsersList;
