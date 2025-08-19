'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { FaHome, FaRobot, FaServicestack, FaYoutube } from 'react-icons/fa';
import { FiBox, FiSettings } from 'react-icons/fi';
import { TbLayoutKanban } from 'react-icons/tb';
import { CgMenuRound } from 'react-icons/cg';
import { FaHouseChimneyCrack, FaUserGroup } from 'react-icons/fa6';
import Profile from '../Header/profile';
import { LuShoppingBag } from 'react-icons/lu';
import { GrAnalytics, GrDeliver } from 'react-icons/gr';
import { IoSettingsSharp } from 'react-icons/io5';

type MenuItem = {
	icon: React.ReactNode;
	label: string;
	href: string | null;
	badge?: string;
};

const menuItems: MenuItem[] = [
	{
		icon: <CgMenuRound className='text-2xl  dark:text-darkforth' />,
		label: 'Dashboard',
		href: null,
	},
	{
		icon: <LuShoppingBag className=' dark:text-darkthird text-xl' />,
		label: 'Orders',
		href: '/Price',
		badge: 'Pro',
	},
	{
		icon: <GrDeliver className=' dark:text-darkthird text-xl' />,
		label: 'Deliveries',
		href: '/Users',
	},
	{
		icon: <FaUserGroup className=' dark:text-darkthird text-xl' />,
		label: 'Customers',
		href: '/report/Comments',
	},
	{
		icon: <GrAnalytics className=' dark:text-darkthird text-xl' />,
		label: 'Analytics',
		href: '/report/Post-report',
	},
	{
		icon: <IoSettingsSharp className=' dark:text-darkthird text-xl' />,
		label: 'Settings',
		href: '/report/Profile-Report',
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
		// إغلاق الشريط الجانبي تلقائياً على الموبايل بعد اختيار رابط
		if (window.innerWidth < 1024) {
			setIsOpen(false);
		}
	}, [pathname]);

	if (pathname.includes('sign-in') || pathname.includes('sign-up')) return null;

	return (
		<>
			{/* زر التبديل */}
			<button
				className='lg:hidden fixed top-4 left-4 z-50 bg-primary dark:bg-darkprimary p-2 rounded-full shadow-md transition-colors duration-300'
				onClick={() => setIsOpen(!isOpen)}>
				<CgMenuRound className='text-2xl text-darkprimary/60 dark:text-secoundry transition-colors duration-300' />
			</button>

			{/* الشريط الجانبي */}

			<AnimatePresence>
				{isOpen && (
					<motion.aside
						initial={{ x: -250, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: -250, opacity: 0 }}
						transition={{ duration: 0.5 }}
						className='fixed lg:static top-16 lg:top-0 left-0 z-40 w-64 h-screen bg-[#F8FAFC] 
                        dark:bg-darkprimary shadow-lg lg:shadow-none transition-colors duration-300'>
						<h1 className='text-black text-xl w-full text-center pt-4 font-bold'>
							EL-Taiar
						</h1>
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
													className='flex items-center p-2 rounded-lg text-darkprimary dark:text-secoundry hover:bg-[#2563EB] hover:text-white focus:bg-[#2563EB]  focus:text-white dark:hover:bg-darkforth group transition-colors duration-300'>
													<span className='w-5 h-5 '>{item.icon}</span>
													<span className='flex-1 ms-3 whitespace-nowrap'>
														{item.label}
													</span>
													{item.badge && (
														<span className='inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-white bg-[#2563EB] rounded-full dark:bg-darkforth dark:text-darkprimary'>
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
												className='text-white  bg-[#2563EB] rounded-3xl p-1 transition-colors duration-300'>
												<Link
													href={'/'}
													className='flex items-center justify-center p-1 text-lg font-medium rounded-lg group gap-2'>
													<FaHome /> {item.label}
												</Link>
											</motion.li>
										)}
									</AnimatePresence>
								))}
							</ul>
							<div className='absolute bottom-24 lg:bottom-6 '>
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
