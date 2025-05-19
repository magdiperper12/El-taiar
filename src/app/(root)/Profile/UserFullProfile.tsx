'use client';
import { motion } from 'framer-motion';

type User = {
	id: number;
	name: string;
	email: string;
	phone?: string;
	address?: string;
	status: 'normal' | 'notary' | 'blocked';
	joinedAt: string;
	avatarUrl?: string;
};

type Props = {
	user: User;
};

const statusColor = {
	normal: 'gray',
	notary: 'green',
	blocked: 'red',
};

const UserFullProfile = ({ user }: Props) => {
	return (
		<motion.div
			className='max-w-3xl mx-auto bg-white rounded-2xl shadow p-8'
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}>
			{/* Header */}
			<div className='flex flex-col sm:flex-row items-center gap-6'>
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
					<h2 className='text-2xl font-bold text-gray-800'>{user.name}</h2>
					<p className='text-gray-500'>{user.email}</p>
					<div
						className={`mt-2 bg-${statusColor[user.status]}-100 text-${
							statusColor[user.status]
						}-700`}>
						{user.status === 'notary'
							? 'موثّق'
							: user.status === 'blocked'
							? 'محظور'
							: 'عادي'}
					</div>
				</div>
			</div>

			{/* Info */}
			<div className='mt-8 space-y-4 text-sm text-gray-600'>
				{user.phone && (
					<div>
						<strong className='text-gray-700'>رقم الهاتف:</strong> {user.phone}
					</div>
				)}
				{user.address && (
					<div>
						<strong className='text-gray-700'>العنوان:</strong> {user.address}
					</div>
				)}
				<div>
					<strong className='text-gray-700'>تاريخ الانضمام:</strong>{' '}
					{user.joinedAt}
				</div>
			</div>

			{/* Actions */}
			<div className='mt-6 flex gap-4 flex-wrap'>
				<button>تعديل البيانات</button>
				{user.status !== 'blocked' && <button>حظر المستخدم</button>}
				{user.status !== 'notary' && (
					<button className='bg-green-600 hover:bg-green-700'>جعل موثّق</button>
				)}
			</div>
		</motion.div>
	);
};

export default UserFullProfile;
