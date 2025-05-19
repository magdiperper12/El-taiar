'use client';

import { FaAlignLeft } from 'react-icons/fa';

interface SidebarToggleProps {
	showSidebar: boolean;
	toggleSidebar: () => void;
}

export default function SidebarToggle({ toggleSidebar }: SidebarToggleProps) {
	return (
		<button
			className='text-2xl focus:outline-none text-darkprimary dark:text-white'
			onClick={toggleSidebar}>
			<FaAlignLeft />
		</button>
	);
}
