'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

function Profile() {
	const [visible, setVisible] = useState(false);
	const toggleVisible = () => setVisible(!visible);

	return (
		<div className='relative flex flex-col items-center w-full'>
			<button
				onClick={toggleVisible}
				type='button'
				className='flex items-center justify-center bg-primary dark:bg-darkprimary p-1 rounded-full transition-colors duration-300 w-full'>
				<div className='overflow-hidden rounded-full border border-forth dark:border-darkforth shadow-inner transition-colors duration-300'>
					<span className='sr-only'>Toggle dashboard menu</span>

					<Image
						src='/image/magdi.png'
						alt='Profile'
						className='w-10 h-10 object-contain bg-primary dark:bg-darkprimary transition-colors duration-300'
						width={40}
						height={40}
					/>
				</div>
				<div className='overflow-hidden flex flex-col text-darkprimary dark:text-secoundry justify-center items-start mx-2'>
					<h1 className='text-sm font-bold  transition-colors duration-300'>
						Omar Elkassas
					</h1>
					<h3 className='text-[12px]  transition-colors duration-300 md:w-36 text-start'>
						Admin
					</h3>
				</div>
			</button>

			{visible && (
				<div className='absolute top-16 z-10 w-48 divide-y divide-forth dark:divide-darkforth rounded-lg border border-forth dark:border-darkforth bg-primary dark:bg-darkprimary shadow-lg transition-colors duration-300'>
					<div className='p-2 flex flex-col'>
						<Link
							href='/Profile'
							className='block rounded-lg px-4 py-2 text-sm text-darkprimary dark:text-secoundry hover:bg-forth dark:hover:bg-darkthird transition-colors duration-300'
							role='menuitem'>
							My profile
						</Link>
						<Link
							href='/Profile'
							className='block rounded-lg px-4 py-2 text-sm text-darkprimary dark:text-secoundry hover:bg-forth dark:hover:bg-darkthird transition-colors duration-300'
							role='menuitem'>
							Billing summary
						</Link>
						<Link
							href='/Profile'
							className='block rounded-lg px-4 py-2 text-sm text-darkprimary dark:text-secoundry hover:bg-forth dark:hover:bg-darkthird transition-colors duration-300'
							role='menuitem'>
							Team settings
						</Link>
						<Link
							href='/Profile'
							className='block rounded-lg px-4 py-2 text-sm text-[#b22222] hover:bg-[#ffe4e1] hover:text-[#8b0000] dark:text-[#e9967a] dark:hover:bg-[#8b0000] dark:hover:text-[#ffe4e1] transition-colors duration-300'
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
