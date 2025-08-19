'use client';

import { FaAlignLeft } from 'react-icons/fa';

interface SidebarToggleProps {
	showSidebar: boolean;
	toggleSidebar: () => void;
}

export default function SidebarToggle({ toggleSidebar }: SidebarToggleProps) {
	return (
		<button
			className='text-2xl  focus:outline-none text-darkprimary/60 dark:text-secoundry transition-colors duration-300'
			onClick={toggleSidebar}
			aria-label='Toggle sidebar'>
			<FaAlignLeft />
		</button>
	);
}
