'use client';

import { useEffect, useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { IoClose } from 'react-icons/io5';
import SidebarToggle from '../Left-side/SidebarToggle';
import SearchBar from './SearchBar';
import Profile from './profile';
import LeftSide from '../Left-side/page';
import { motion, AnimatePresence } from 'framer-motion';

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
		<header className='bg-darkforth  dark:bg-black text-darkprimary dark:text-secoundry border-b-2  p-2 shadow z-10 fixed w-full top-0'>
			<div className='flex items-center gap-4 fixed top-3 right-5'>
				<div className='hidden md:flex  '>
					<Profile />
				</div>

				<button
					className='block lg:hidden p-2 text-2xl'
					onClick={toggleMenu}
					aria-label='Toggle menu'>
					{isOpen ? <IoClose /> : <TiThMenu />}
				</button>
			</div>{' '}
			<div className=' hidden lg:flex  items-center justify-between px-4 py-2 sm:px-6 lg:px-8 w-full'>
				<div className='flex items-center gap-4 w-6/12'>
					<SidebarToggle
						showSidebar={showSidebar}
						toggleSidebar={toggleSidebar}
					/>
					<div className='flex gap-4 items-center w-full'>
						<SearchBar />
					</div>
				</div>
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
