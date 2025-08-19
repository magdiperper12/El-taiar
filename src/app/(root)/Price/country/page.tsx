// components/Country.tsx
import React from 'react';
import { MdModeEditOutline } from 'react-icons/md';

type CountryItem = {
	ar: string;
	en: string;
	logo: string;
};

const countries: CountryItem[] = [
	{ ar: 'مصر', en: 'Egypt', logo: '/image/magdi.png' },
	{ ar: 'سوريا', en: 'Syria', logo: '/image/magdi.png' },
	{ ar: 'السعوديه', en: 'Saudi Arabia', logo: '/image/magdi.png' },
	{ ar: 'الجزائر', en: 'Algeria', logo: '/image/magdi.png' },
	{ ar: 'نيجيريا', en: 'Nigeria', logo: '/image/magdi.png' },
];

const Country: React.FC = () => {
	return (
		<div className='p-4 sm:p-6 max-w-4xl mx-auto space-y-5'>
			<div className='mt-8 flex justify-end'>
				<button className='text-lg bg-third hover:bg-darkthird transition-colors text-darkforth px-6 py-2 rounded-full font-bold flex items-center gap-2 shadow-md'>
					+ Add Country
				</button>
			</div>
			<ul className='grid gap-4 grid-cols-1'>
				{countries.map((country, index) => (
					<li
						key={index}
						className='bg-primary dark:bg-darkprimary shadow-md rounded-full p-2 px-4 border border-secoundry dark:border-darksecoundry flex items-center justify-between gap-4 hover:shadow-lg transition'>
						<img
							src={country.logo}
							alt={country.ar}
							className='w-12 h-12 rounded-full object-cover'
						/>
						<p className='text-base font-semibold text-darkprimary dark:text-darkforth'>
							{country.ar}
						</p>
						<p className='text-sm text-secoundry dark:text-darksecoundry'>
							{country.en}
						</p>
						<div className='flex items-center gap-4'>
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
	);
};

export default Country;
