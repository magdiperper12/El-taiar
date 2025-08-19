// components/Country.tsx
import React from 'react';
import { FaSortDown } from 'react-icons/fa';
import { MdModeEditOutline } from 'react-icons/md';

type Company = {
	nameAr: string;
	nameEn: string;
	price: string;
	note: string;
};

const companies: Company[] = [
	{
		nameAr: 'الاخوه',
		nameEn: 'Elekhwa',
		price: '30 pounds',
		note: 'New price',
	},
	{
		nameAr: 'الاخوه',
		nameEn: 'Elekhwa',
		price: '30 pounds',
		note: 'New price',
	},
	{
		nameAr: 'الاخوه',
		nameEn: 'Elekhwa',
		price: '30 pounds',
		note: 'New price',
	},
	{
		nameAr: 'الاخوه',
		nameEn: 'Elekhwa',
		price: '30 pounds',
		note: 'New price',
	},
];

const Chicken: React.FC = () => {
	return (
		<div className='p-4 sm:p-6 max-w-4xl mx-auto space-y-8'>
			{/* Countries */}
			<div>
				<h2 className='text-xl font-bold text-darkprimary dark:text-darkforth my-2'>
					Countries
				</h2>
				<div className='flex justify-end gap-4 items-center'>
					<button className='text-sm bg-third hover:bg-darkthird transition-colors text-darkforth px-4 py-2 rounded-full font-bold shadow-md'>
						+ Add Compony
					</button>
					<button className='flex justify-center items-center text-sm bg-third hover:bg-darkthird transition-colors text-darkforth px-4 py-2 rounded-full font-bold shadow-md'>
						<FaSortDown className='text-xl pb-1' /> Add Compony
					</button>
				</div>
				<ul className='grid gap-4 mt-4'>
					{companies.map((company, index) => (
						<li
							key={index}
							className='bg-primary dark:bg-darkprimary shadow rounded-full p-2 px-4 border border-secoundry dark:border-darksecoundry flex items-center justify-between gap-4 hover:shadow-lg transition'>
							<p className='text-base font-semibold text-darkprimary dark:text-darkforth'>
								{company.nameAr}
							</p>
							<p className='text-sm text-secoundry dark:text-darksecoundry'>
								{company.nameEn}
							</p>
							<p className='text-sm text-secoundry dark:text-darksecoundry'>
								{company.price}
							</p>
							<p className='text-sm text-darkprimary dark:text-darkforth bg-forth dark:bg-darkforth rounded-full p-1 px-4'>
								{company.note}
							</p>
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
			</div>
		</div>
	);
};

export default Chicken;
