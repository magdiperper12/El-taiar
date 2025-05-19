'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

function Profile() {
	const [visable, setvisable] = useState(false);
	const togglevisable = () => setvisable(!visable);

	return (
		<div className='relative flex flex-col items-center w-full'>
			<button
				onClick={togglevisable}
				type='button'
				className='flex items-center justify-center bg-primary p-1 rounded-full'>
				<div className='overflow-hidden rounded-full border border-gray-300 shadow-inner'>
					<span className='sr-only'>Toggle dashboard menu</span>

					<Image
						src={'/image/magdi.png'}
						alt=''
						className='size-10 object-contain bg-gray-500'
						width={40}
						height={40}
					/>
				</div>
				<div className='overflow-hidden flex flex-col justify-center items-start mx-2'>
					<h1 className='text-sm font-bold text-gray-700'>Omar Elkassas</h1>
					<h3 className='text-[9px] text-gray-500'>
						Poultry engineer fattening{' '}
					</h3>
				</div>
			</button>

			{visable && (
				<div className='absolute top-16 z-10 w-48 divide-y divide-gray-100 rounded-lg border border-gray-200 bg-white shadow-lg'>
					<div className='p-2 flex flex-col'>
						<Link
							href='/Profile'
							className='block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition'
							role='menuitem'>
							My profile
						</Link>
						<Link
							href='/Profile'
							className='block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition'
							role='menuitem'>
							Billing summary
						</Link>
						<Link
							href='/Profile'
							className='block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition'
							role='menuitem'>
							Team settings
						</Link>
						<Link
							href='/Profile'
							className='block rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-100 hover:text-red-600 transition'
							role='menuitem'>
							Logout
						</Link>
					</div>
				</div>
			)}
		</div>
	);
}

export default Profile;
