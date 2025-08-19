'use client';
import React, { useState } from 'react';
import { FaSortDown } from 'react-icons/fa';
import { MdModeEditOutline } from 'react-icons/md';

type Compony = {
	nameAr: string;
	nameEn: string;
	price: string;
};

const componys = [
	{
		nameAr: 'الاخوه',
		nameEn: 'Elekhwa',
		price: '30 pounds',
	},
];

const products = [
	{ type: 'padi', lastPrice: '30 pounds', todayPrice: '30 pounds' },
	{ type: 'Nami', lastPrice: '30 pounds', todayPrice: '30 pounds' },
	{ type: 'Nahi', lastPrice: '30 pounds', todayPrice: '30 pounds' },
];

const Feed: React.FC = () => {
	const [show, setShow] = useState(false);
	const toggleshow = () => {
		setShow(!show);
	};
	return (
		<div className='p-4 sm:p-6 max-w-4xl mx-auto space-y-8 bg-primary dark:bg-darkprimary'>
			{/* Header */}
			<div>
				<h2 className='text-xl font-bold text-darkprimary dark:text-darkforth my-2'>
					Feed
				</h2>
				<div className='flex justify-end gap-4 items-center'>
					<button className='text-sm bg-third hover:bg-darkthird transition-colors text-darkforth px-4 py-2 rounded-full font-bold shadow-md'>
						+ Add Compony
					</button>
					<button className='flex justify-center items-center text-sm bg-third hover:bg-darkthird transition-colors text-darkforth px-4 py-2 rounded-full font-bold shadow-md'>
						<FaSortDown className='text-xl pb-1' /> Add Compony
					</button>
				</div>

				{/* Company List */}
				<ul className='grid gap-4 my-4'>
					{componys.map((compony, index) => (
						<li
							key={index}
							className='bg-primary dark:bg-darkprimary shadow rounded-full p-2 px-4 border border-secoundry dark:border-darksecoundry flex items-center justify-between gap-4 hover:shadow-lg transition'>
							<p className='text-base font-semibold text-darkprimary dark:text-darkforth'>
								{compony.nameAr}
							</p>
							<p className='text-sm text-secoundry dark:text-darksecoundry'>
								{compony.nameEn}
							</p>
							<p className='text-sm text-secoundry dark:text-darksecoundry'>
								{compony.price}
							</p>
							<button
								onClick={toggleshow}
								className='text-sm text-darkforth bg-third hover:bg-darkthird rounded-full p-1 px-4 transition'>
								Types
							</button>
							<div className='flex items-center gap-2'>
								<button className='w-8 h-8 bg-third hover:bg-darkthird text-darkforth rounded-full flex items-center justify-center transition'>
									<MdModeEditOutline size={16} />
								</button>
								<button className='w-8 h-8 bg-forth hover:bg-darkforth text-darkprimary rounded-full flex items-center justify-center transition'>
									x
								</button>
							</div>
						</li>
					))}
				</ul>

				{/* Products Types Section */}
				{show && (
					<div className='bg-primary dark:bg-darkprimary rounded-xl shadow p-6 border border-secoundry dark:border-darksecoundry'>
						<div className='flex justify-between items-center mb-4'>
							<p className='text-sm font-bold text-darkforth bg-third rounded-full p-1 px-4'>
								Add Product
							</p>
							<p className='text-sm font-bold text-darkforth bg-third rounded-full p-1 px-4'>
								Save
							</p>
						</div>
						<div className='mb-4 w-full text-center'>
							<p className='text-lg font-semibold text-darkprimary dark:text-darkforth'>
								al-akhwa Company
							</p>
						</div>
						<div className='grid text-center grid-cols-1 sm:grid-cols-3 gap-4'>
							<div>
								<h1 className='text-darkprimary dark:text-darkforth'>Types</h1>
								{products.map((product, index) => (
									<div
										key={index}
										className='m-auto bg-third text-darkforth px-4 py-1 rounded-full w-24 my-2'>
										{product.type}
									</div>
								))}
							</div>
							<div>
								<h1 className='text-darkprimary dark:text-darkforth'>
									Last price
								</h1>
								{products.map((product, index) => (
									<div
										key={index}
										className='m-auto border-2 border-third text-darkforth px-4 py-1 rounded-full w-36 my-2'>
										{product.lastPrice}
									</div>
								))}
							</div>
							<div>
								<h1 className='text-darkprimary dark:text-darkforth'>
									Today's price
								</h1>
								{products.map((product, index) => (
									<div
										key={index}
										className='m-auto border-2 border-third text-darkforth px-4 py-1 rounded-full w-36 my-2'>
										{product.todayPrice}
									</div>
								))}
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Feed;
