'use client';

import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Dark: React.FC = () => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

	useEffect(() => {
		document.documentElement.classList.toggle('dark', isDarkMode);
	}, [isDarkMode]);
	return (
		<div
			className={`      text-xl  rounded-full    flex items-center  cursor-pointer`}
			onClick={() => setIsDarkMode(!isDarkMode)}>
			<div
				className={`w-9 h-9 justify-center rounded-full   p-2  flex  items-center ${
					isDarkMode ? 'bg-primary' : 'bg-primary'
				}`}>
				{isDarkMode ? (
					<FaSun className='text-yellow-500' />
				) : (
					<FaMoon className='text-blue-600 ' />
				)}
			</div>
		</div>
	);
};

export default Dark;
