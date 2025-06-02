'use client';
import React, { useState } from 'react';
import { FaSortDown } from 'react-icons/fa';
import { MdModeEditOutline } from 'react-icons/md';

type componys = {
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
	{ type: 'Red', lastPrice: '30 pounds', todayPrice: '30 pounds' },
	{ type: 'White', lastPrice: '30 pounds', todayPrice: '30 pounds' },
];

const Eggs: React.FC = () => {
	const [show, setShow] = useState(false);
	const toggleshow = () => {
		setShow(!show);
	};
	return (
		<div className='p-4 sm:p-6 max-w-4xl mx-auto space-y-8'>
			{/* Countries */}
			<div>
				<h2 className='text-xl font-bold text-gray-600 my-2'>Eggs</h2>
				<div className='flex justify-end gap-4 items-center'>
					<button className='text-sm bg-gray-500 hover:bg-gray-700 transition text-white px-4 py-2 rounded-full font-bold shadow-md'>
						+ Add Compony
					</button>
					<button className='flex justify-center items-center text-sm bg-gray-500 hover:bg-gray-700 transition text-white px-4 py-2 rounded-full font-bold shadow-md'>
						<FaSortDown className='text-xl pb-1' /> Add Compony
					</button>
				</div>

				<ul className='grid gap-4 my-4'>
					{componys.map((compony, index) => (
						<li
							key={index}
							className='bg-white shadow rounded-full p-2 px-4 border flex items-center justify-between gap-4 hover:shadow-lg transition'>
							<p className='text-base font-semibold text-gray-800'>
								{compony.nameAr}
							</p>
							<p className='text-sm text-gray-500'>{compony.nameEn}</p>
							<p className='text-sm text-gray-500'>{compony.price}</p>
							<button
								onClick={() => toggleshow()}
								className='text-sm text-gray-50 bg-orange-500 rounded-full p-1 px-4'>
								Types
							</button>
							<div className='flex items-center gap-2'>
								<button className='w-8 h-8 bg-gray-500 hover:bg-gray-600 text-white rounded-full flex items-center justify-center transition'>
									<MdModeEditOutline size={16} />
								</button>
								<button className='w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition'>
									x
								</button>
							</div>
						</li>
					))}
				</ul>
				{show && (
					<div className='bg-white rounded-xl shadow p-6'>
						<div className='flex justify-between items-center mb-4'>
							<p className='text-sm font-bold text-gray-50 bg-orange-500 rounded-full p-1 px-4'>
								Add Product
							</p>
							<p className='text-sm font-bold text-gray-50 bg-orange-500 rounded-full p-1 px-4'>
								Save
							</p>
						</div>
						<div className='mb-4 w-full text-center'>
							<p className='text-lg font-semibold text-gray-800'>
								al-akhwa Company
							</p>
						</div>
						<div className='grid text-center grid-cols-1 text-darkprimary sm:grid-cols-3 gap-4'>
							<div>
								<h1>Types</h1>
								{products.map((product, index) => (
									<div
										key={index}
										className=' m-auto bg-orange-400 text-darkprimary px-4 py-1 rounded-full w-24 my-2'>
										{product.type}
									</div>
								))}
							</div>
							<div>
								<h1>Last price</h1>
								{products.map((product, index) => (
									<div
										key={index}
										className=' m-auto border-orange-400 border-2 text-darkprimary px-4 py-1 rounded-full w-36 my-2'>
										{product.lastPrice}
									</div>
								))}
							</div>
							<div>
								<h1>Today's price</h1>
								{products.map((product, index) => (
									<div
										key={index}
										className=' m-auto border-orange-400 border-2 text-darkprimary px-4 py-1 rounded-full w-36 my-2 '>
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

export default Eggs;
