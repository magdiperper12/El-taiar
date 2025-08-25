// app/settings/page.tsx (App Router)
// أو pages/settings.tsx لو Pages Router

'use client';

export default function SettingsPage() {
	return (
		<main className=' p-6 mt-8'>
			<h1 className='text-2xl font-semibold mb-6'>Settings</h1>

			<div className='max-w-4xl mx-auto space-y-6'>
				{/* Profile Settings */}
				<div className='bg-white rounded-xl shadow p-6'>
					<h2 className='text-lg font-semibold mb-4'>Profile Settings</h2>
					<div className='flex items-center space-x-4 mb-4'>
						<img
							src='/image/magdi.png'
							alt='Profile'
							className='w-20 h-20 rounded-full object-cover border'
						/>
						<button className='px-4 py-2 border rounded-lg text-sm hover:bg-gray-100'>
							Change Photo
						</button>
					</div>
					<div className='grid md:grid-cols-2 gap-4'>
						<input
							type='text'
							placeholder='Full Name'
							className='border px-3 py-2 rounded-lg'
						/>
						<input
							type='email'
							placeholder='Email Address'
							className='border px-3 py-2 rounded-lg'
						/>
						<input
							type='text'
							placeholder='Phone Number'
							className='border px-3 py-2 rounded-lg'
						/>
						<input
							type='text'
							placeholder='Username'
							className='border px-3 py-2 rounded-lg'
						/>
					</div>
				</div>

				{/* Account Settings */}
				<div className='bg-white rounded-xl shadow p-6'>
					<h2 className='text-lg font-semibold mb-4'>Account Settings</h2>
					<div className='grid md:grid-cols-2 gap-4'>
						<input
							type='password'
							placeholder='Current Password'
							className='border px-3 py-2 rounded-lg'
						/>
						<input
							type='password'
							placeholder='New Password'
							className='border px-3 py-2 rounded-lg'
						/>
						<input
							type='password'
							placeholder='Confirm Password'
							className='border px-3 py-2 rounded-lg'
						/>
					</div>
				</div>

				{/* Save Button */}
				<div className='flex justify-end'>
					<button className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700'>
						Save Changes
					</button>
				</div>
			</div>
		</main>
	);
}
