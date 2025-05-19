'use client';

import React, { useState } from 'react';

type Country = {
	code: string;
	name: string;
	flag: string; // emoji أو رابط صورة
};

const countries: Country[] = [
	{ code: 'EG', name: 'مصر', flag: '🇪🇬' },
	{ code: 'SA', name: 'السعودية', flag: '🇸🇦' },
	{ code: 'AE', name: 'الإمارات', flag: '🇦🇪' },
	{ code: 'US', name: 'الولايات المتحدة', flag: '🇺🇸' },
	{ code: 'FR', name: 'فرنسا', flag: '🇫🇷' },
	{ code: 'DE', name: 'ألمانيا', flag: '🇩🇪' },
	{ code: 'IN', name: 'الهند', flag: '🇮🇳' },
	{ code: 'CN', name: 'الصين', flag: '🇨🇳' },
	{ code: 'JP', name: 'اليابان', flag: '🇯🇵' },
	{ code: 'BR', name: 'البرازيل', flag: '🇧🇷' },
];

const CountrySelector = () => {
	const [search, setSearch] = useState('');
	const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

	const filteredCountries = countries.filter(
		(c) =>
			c.name.includes(search) ||
			c.code.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div className='max-w-sm mx-auto p-4 border rounded shadow-md bg-white'>
			<h2 className='text-xl font-semibold mb-4 text-center'>اختر الدولة</h2>

			<input
				type='text'
				placeholder='ابحث عن دولة...'
				className='w-full mb-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>

			<ul className='max-h-60 overflow-auto border border-gray-200 rounded'>
				{filteredCountries.length === 0 && (
					<li className='p-3 text-center text-gray-500'>لا توجد دول مطابقة</li>
				)}

				{filteredCountries.map((country) => (
					<li
						key={country.code}
						className={`flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-blue-100 ${
							selectedCountry?.code === country.code
								? 'bg-blue-200 font-semibold'
								: ''
						}`}
						onClick={() => setSelectedCountry(country)}>
						<span className='text-2xl'>{country.flag}</span>
						<span>{country.name}</span>
						<span className='ml-auto text-sm text-gray-400'>
							{country.code}
						</span>
					</li>
				))}
			</ul>

			{selectedCountry && (
				<div className='mt-4 p-3 bg-blue-50 border border-blue-300 rounded text-center'>
					<p>
						الدولة المختارة:{' '}
						<span className='font-bold'>
							{selectedCountry.flag} {selectedCountry.name} (
							{selectedCountry.code})
						</span>
					</p>
				</div>
			)}
		</div>
	);
};

export default CountrySelector;
