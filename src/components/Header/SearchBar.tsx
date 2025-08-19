import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { PiBellSimpleRingingFill } from 'react-icons/pi';
import Dark from '../theme/Dark';

function SearchBar() {
	return (
		<div className='flex items-center ms-24 md:ms-44 lg:ms-0 gap-2 justify-end w-full xl:w-full mx-auto'>
			<div className='bg-transparent z-50 border-2 gap-2 flex items-center border-[#E5E7EB] dark:border-darkthird text-darkprimary dark:text-darkthird w-10/12 md:w-8/12 rounded-full transition-colors duration-300'>
				<CiSearch className='text-darkprimary/60 dark:text-darkthird text-xl m-auto ms-2 transition-colors duration-300' />
				<input
					type='text'
					placeholder='search order'
					className='outline-none bg-transparent text-sm py-2 w-full placeholder:text-darkprimary/60 dark:placeholder:text-darkthird text-darkprimary dark:text-darkthird transition-colors duration-300'
				/>
			</div>

			<div className='w-2/12  md:w-4/12 '>
				<div className='absolute right-5 md:right-48 lg:right-72 flex gap-3 text-darkprimary text-xl top-5 lg:top-4 '>
					<button className='flex relative font-bold items-center p-2  duration-300 text-darkprimary dark:text-darkthird bg-primary dark:bg-darkprimary rounded-full transition-colors '>
						<PiBellSimpleRingingFill className='text-2xl text-darkprimary/60 dark:text-darkthird transition-colors duration-300' />
					</button>
					<Dark />
				</div>
			</div>
			<div className='  w-4/12 '>
				<div className='absolute hidden lg:flex  lg:left-[320px] xl:left-[470px]  gap-3 text-darkprimary text-xl top-4 '>
					<button className='flex relative font-bold items-center p-2  duration-300 text-darkprimary dark:text-darkthird bg-primary dark:bg-darkprimary rounded-full transition-colors '>
						<PiBellSimpleRingingFill className='text-2xl text-darkprimary/60 dark:text-darkthird transition-colors duration-300' />
					</button>
					<Dark />
				</div>
			</div>
		</div>
	);
}

export default SearchBar;
