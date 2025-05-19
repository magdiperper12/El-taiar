'use client';

import { useState } from 'react';
import Header from '@/src/components/Header/Header';
import LeftSide from '@/src/components/Left-side/page';

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [showSidebar, setShowSidebar] = useState(true);

	return (
		<div className='flex w-full h-screen bg-primary text-white dark:bg-darkprimary dark:text-white'>
			{showSidebar && (
				<aside className='hidden lg:block bg-white dark:bg-gray-800'>
					<LeftSide />
				</aside>
			)}

			<main className='flex flex-col flex-1 w-full'>
				<Header
					showSidebar={showSidebar}
					toggleSidebar={() => setShowSidebar((prev) => !prev)}
				/>
				<div className='flex-1 pt-16 overflow-y-auto px-4 sm:px-6'>
					{children}
				</div>
			</main>
		</div>
	);
}
