'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { FaRobot, FaServicestack, FaYoutube } from 'react-icons/fa';
import { FiBox, FiSave, FiSettings } from 'react-icons/fi';
import { TbLayoutKanban } from 'react-icons/tb';
import { CgMenuRound } from 'react-icons/cg';
import { FaHouseChimneyCrack } from 'react-icons/fa6';
import Profile from '../Header/profile';

type MenuItem = {
	icon: React.ReactNode;
	label: string;
	href: string | null;
	badge?: string;
};

const menuItems: MenuItem[] = [
	{
		icon: <CgMenuRound className='text-2xl' />,
		label: 'Dashboard',
		href: null,
	},
	{
		icon: <FaRobot className='text-yellow-600 text-xl' />,
		label: 'Price',
		href: '/Price',
		badge: 'Pro',
	},
	{
		icon: <TbLayoutKanban className='text-yellow-600 text-xl' />,
		label: 'Users',
		href: '/Users',
	},
	{
		icon: <FaServicestack className='text-yellow-600 text-xl' />,
		label: 'Comments report',
		href: '/Comments',
	},
	{
		icon: <FaHouseChimneyCrack className='text-yellow-600 text-xl' />,
		label: 'Posts report',
		href: '/Post-report',
	},
	{
		icon: <FaYoutube className='text-yellow-600 text-xl' />,
		label: 'Profile report',
		href: '/Profile-Report',
	},
	{
		icon: <FiBox className='text-yellow-600 text-xl' />,
		label: 'Video Library',
		href: '/Video',
	},
	{
		icon: <FiSettings className='text-yellow-600 text-xl ' />,
		label: 'Flutter version',
		href: '/temperature',
	},
];

const itemVariants = {
	hidden: { opacity: 0, x: -2 },
	visible: (i: number) => ({
		opacity: 1,
		x: 0,
		transition: { delay: i * 0.1 },
	}),
};

function LeftSide() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1024) {
				setIsOpen(true);
			}
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		// Auto close sidebar on mobile after link click
		if (window.innerWidth < 1024) {
			setIsOpen(false);
		}
	}, [pathname]);

	if (pathname.includes('sign-in') || pathname.includes('sign-up')) return null;

	return (
		<>
			{/* Toggle Button */}
			<button
				className='lg:hidden fixed top-4 left-4 z-50  bg-transparent p-2 rounded-full shadow-md'
				onClick={() => setIsOpen(!isOpen)}>
				<CgMenuRound className='text-2xl text-gray-800 dark:text-white' />
			</button>

			{/* Sidebar */}
			<AnimatePresence>
				{isOpen && (
					<motion.aside
						initial={{ x: -250, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: -250, opacity: 0 }}
						transition={{ duration: 0.5 }}
						className='fixed lg:static top-16 lg:top-0 left-0 z-40 w-64 h-screen bg-gray-50 dark:bg-gray-800 shadow-lg lg:shadow-none'>
						<div className='h-full py-5 px-3 overflow-y-auto'>
							<ul className='space-y-2 font-medium'>
								{menuItems.map((item, idx) => (
									<AnimatePresence key={idx}>
										{item.href ? (
											<motion.li
												initial='hidden'
												animate='visible'
												exit='hidden'
												custom={idx}
												variants={itemVariants}>
												<Link
													href={item.href}
													className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
													<span className='w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'>
														{item.icon}
													</span>
													<span className='flex-1 ms-3 whitespace-nowrap'>
														{item.label}
													</span>
													{item.badge && (
														<span className='inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300'>
															{item.badge}
														</span>
													)}
												</Link>
											</motion.li>
										) : (
											<motion.li
												initial='hidden'
												animate='visible'
												exit='hidden'
												custom={idx}
												variants={itemVariants}
												className='text-white bg-orange-500 rounded-3xl p-1'>
												<span className='flex items-center justify-center p-1 text-lg font-medium rounded-lg group'>
													<span className='w-5 h-5 mr-2 -mt-2'>
														{item.icon}
													</span>
													{item.label}
												</span>
											</motion.li>
										)}
									</AnimatePresence>
								))}
							</ul>
							<div className='lg:hidden mt-5'>
								<Profile />
							</div>
						</div>
					</motion.aside>
				)}
			</AnimatePresence>
		</>
	);
}

export default LeftSide;
