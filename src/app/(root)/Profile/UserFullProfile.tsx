'use client';
import { motion } from 'framer-motion';
import { BsPatchCheck } from 'react-icons/bs';
import { HiBadgeCheck } from 'react-icons/hi';
import { MdBlockFlipped, MdDeleteOutline } from 'react-icons/md';
import { TbLockOpen } from 'react-icons/tb';

type User = {
	id: number;
	name: string;
	phone?: string;
	address?: string;
	joinedAt: string;
	avatarUrl?: string;
};

type Props = {
	user: User;
};

const UserFullProfile = ({ user }: Props) => {
	return (
		<motion.div
			className='w-11/12 md:3/4 xl:w-2/3 mx-auto bg-white dark:bg-zinc-900 rounded-2xl shadow p-6 text-center transition-colors duration-300'
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}>
			{/* Header */}
			<div className='flex flex-col items-center justify-center gap-2'>
				<img
					src={
						user.avatarUrl ||
						`https://ui-avatars.com/api/?name=${encodeURIComponent(
							user.name
						)}&background=random`
					}
					alt='Avatar'
					className='w-32 h-32 rounded-full border object-cover'
				/>
				<div className='text-center sm:text-left'>
					<h2 className='text-2xl font-bold text-gray-800 dark:text-white'>
						{user.name}
					</h2>
				</div>
			</div>

			{/* Info */}
			<div className='mt-3 space-y-4 text-sm text-gray-600 dark:text-gray-300'>
				{user.phone && (
					<div>
						<strong className='text-gray-700 dark:text-gray-200'>
							رقم الهاتف:
						</strong>{' '}
						{user.phone}
					</div>
				)}
				{user.address && (
					<div>
						<strong className='text-gray-700 dark:text-gray-200'>
							العنوان:
						</strong>{' '}
						{user.address}
					</div>
				)}
				<div>
					<strong className='text-gray-700 dark:text-gray-200'>
						تاريخ الانضمام:
					</strong>{' '}
					{user.joinedAt}
				</div>
			</div>

			{/* Actions */}
			<div className='mt-6 flex gap-4 flex-wrap'>
				<button className='w-2/3 m-auto rounded-full flex justify-center items-center gap-2 border-2 border-gray-200 dark:border-gray-700 p-2 text-zinc-600 dark:text-zinc-300'>
					<MdDeleteOutline className='text-xl text-gray-500 dark:text-gray-400' />
					Delete Profile
				</button>
			</div>

			<div className='mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4'>
				<div>
					<button className='w-2/3 m-auto rounded-full flex justify-start ps-9 items-center gap-2 border-2 border-gray-200 dark:border-gray-700 p-2 text-zinc-600 dark:text-zinc-300'>
						<MdBlockFlipped className='text-xl text-red-500' /> Block User
					</button>
				</div>
				<div>
					<button className='w-2/3 m-auto rounded-full flex justify-start ps-9 items-center gap-2 border-2 border-gray-200 dark:border-gray-700 p-2 text-zinc-600 dark:text-zinc-300'>
						<TbLockOpen className='text-xl text-red-500' /> Unblock User
					</button>
				</div>
				<div>
					<button className='w-2/3 m-auto rounded-full flex justify-start ps-9 items-center gap-2 border-2 border-gray-200 dark:border-gray-700 p-2 text-zinc-600 dark:text-zinc-300'>
						<HiBadgeCheck className='text-xl text-blue-500' /> Make Notary
					</button>
				</div>
				<div>
					<button className='w-2/3 m-auto rounded-full flex justify-start ps-9 items-center gap-2 border-2 border-gray-200 dark:border-gray-700 p-2 text-zinc-600 dark:text-zinc-300'>
						<BsPatchCheck className='text-xl text-blue-500' /> Remove Notary
					</button>
				</div>
			</div>
		</motion.div>
	);
};

export default UserFullProfile;
