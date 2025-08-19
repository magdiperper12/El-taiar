'use client';

import { useEffect, useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { IoClose } from 'react-icons/io5';
import SidebarToggle from '../Left-side/SidebarToggle';
import SearchBar from './SearchBar';
import Profile from './profile';
import LeftSide from '../Left-side/page';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
	showSidebar: boolean;
	toggleSidebar: () => void;
}

const Header = ({ showSidebar, toggleSidebar }: HeaderProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [login, setLogin] = useState(false);

	useEffect(() => {
		const url = window.location.href.toString();
		setLogin(url.includes('sign-in') || url.includes('sign-up'));
	}, []);

	const toggleMenu = () => setIsOpen(!isOpen);
	if (login) return null;

	return (
		<header className='bg-white  dark:bg-black  dark:text-secoundry border-b-[1px]  p-2  z-10 fixed w-full top-0'>
			<div className='  lg:w-5/12 fixed bg-white top-0 right-44 z-40 h-16'></div>{' '}
			<div className='flex items-center gap-4 fixed top-5  right-5'>
				<button
					className='block lg:hidden p-2 text-2xl'
					onClick={toggleMenu}
					aria-label='Toggle menu'>
					{isOpen ? (
						<IoClose className='text-darkprimary/60 ' />
					) : (
						<TiThMenu className='text-darkprimary/60 ' />
					)}
				</button>
			</div>{' '}
			<div className=' hidden lg:flex  items-center justify-between px-4 py-2 sm:px-6 lg:px-8 w-full'>
				<div className='flex items-center gap-4 w-6/12 '>
					<SidebarToggle
						showSidebar={showSidebar}
						toggleSidebar={toggleSidebar}
					/>
					<div className='flex gap-4 items-center w-full'>
						<SearchBar />
					</div>
				</div>
				<Link
					href={'/'}
					className='overflow-hidden rounded-full border border-forth dark:border-darkforth shadow-inner transition-colors duration-300'>
					<span className='sr-only'>Toggle dashboard menu</span>

					<Image
						src='/image/magdi.png'
						alt='Profile'
						className='w-10 h-10 object-contain bg-primary dark:bg-darkprimary transition-colors duration-300'
						width={40}
						height={40}
					/>
				</Link>
			</div>
			<AnimatePresence>
				<motion.div
					initial={{ x: '100%' }}
					animate={{ x: 0 }}
					exit={{ x: '100%' }}
					transition={{ type: 'spring', stiffness: 300, damping: 30 }}
					className='fixed top-0 right-0 z-50  w-full bg-white dark:bg-darkprimary shadow-lg p-6 flex  gap-2 overflow-y-auto lg:hidden'>
					<SearchBar />

					<div>
						<LeftSide />
					</div>
				</motion.div>
			</AnimatePresence>
		</header>
	);
};

export default Header;
