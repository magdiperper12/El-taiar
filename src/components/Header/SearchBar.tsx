import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { PiBellSimpleRingingFill } from 'react-icons/pi';
import Dark from '../theme/Dark';

function SearchBar() {
	return (
		<div className='flex items-center ms-24 md:ms-44 lg:ms-0 gap-2 justify-end w-full xl:w-full mx-auto'>
			<div className='bg-transparent border-2 gap-2 flex items-center border-gray-200 text-black  w-8/12   rounded-full'>
				<CiSearch className='text-gray-500 text-xl m-auto ms-2' />
				<input
					type='text'
					placeholder='search'
					className='outline-none bg-transparent text-sm py-2 w-full placeholder:text-gray-500 text-darkprimary dark:text-darkthird dark:placeholder:text-darkthird'
				/>
			</div>
			<div className='flex gap-2 text-darkprimary text-xl w-4/12'>
				<button className='flex relative font-bold items-center  p-2 transition-transform duration-300  text-darkprimary  gap-8 dark:text-darkthird bg-primary  rounded-full'>
					<PiBellSimpleRingingFill className='text-2xl text-gray-600 dark:text-darkthird' />
				</button>
				<Dark />
			</div>
		</div>
	);
}

export default SearchBar;
