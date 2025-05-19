import UserFullProfile from './UserFullProfile';

const page = () => {
	const dummyUser = {
		id: 1,
		name: 'أحمد عبد الله',
		phone: '01012345678',
		address: 'القاهرة، مصر',

		joinedAt: '2023-11-10',
		avatarUrl: '/image/magdi.png', // أو يمكنك إضافة رابط صورة فعلية
	};

	return (
		<div className='p-6 bg-gray-50  h-[90vh] flex justify-center items-center  dark:bg-gray-800 '>
			<UserFullProfile user={dummyUser} />
		</div>
	);
};

export default page;
