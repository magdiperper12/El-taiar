import UserFullProfile from './UserFullProfile';

const page = () => {
	const dummyUser = {
		id: 1,
		name: 'أحمد عبد الله',
		email: 'ahmed@email.com',
		phone: '01012345678',
		address: 'القاهرة، مصر',
		status: 'notary' as 'normal' | 'notary' | 'blocked',
		joinedAt: '2023-11-10',
		avatarUrl: '/image/magdi.png', // أو يمكنك إضافة رابط صورة فعلية
	};

	return (
		<div className='p-6 bg-gray-50 min-h-screen'>
			<UserFullProfile user={dummyUser} />
		</div>
	);
};

export default page;
