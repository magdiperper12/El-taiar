'use client';

import React, { useState } from 'react';

type Country = {
	code: string;
	name: string;
	flag: string;
};

const initialCountries: Country[] = [
	{ code: 'EG', name: 'مصر', flag: '🇪🇬' },
	{ code: 'SA', name: 'السعودية', flag: '🇸🇦' },
	{ code: 'US', name: 'الولايات المتحدة', flag: '🇺🇸' },
];

const AddCountryForm = () => {
	const [countries, setCountries] = useState<Country[]>(initialCountries);
	const [name, setName] = useState('');
	const [code, setCode] = useState('');
	const [flag, setFlag] = useState('');
	const [error, setError] = useState('');

	const handleAddCountry = () => {
		if (!name || !code || !flag) {
			setError('يرجى ملء جميع الحقول');
			return;
		}
		if (countries.find((c) => c.code.toLowerCase() === code.toLowerCase())) {
			setError('رمز الدولة موجود بالفعل');
			return;
		}

		const newCountry: Country = {
			name,
			code: code.toUpperCase(),
			flag,
		};

		setCountries([...countries, newCountry]);
		setName('');
		setCode('');
		setFlag('');
		setError('');
	};

	return (
		<div className='max-w-md mx-auto p-6 bg-white rounded shadow'>
			<h2 className='text-2xl font-bold mb-4 text-center'>إضافة دولة جديدة</h2>

			{error && <p className='mb-4 text-red-600 text-center'>{error}</p>}

			<input
				type='text'
				placeholder='اسم الدولة'
				value={name}
				onChange={(e) => setName(e.target.value)}
				className='w-full mb-3 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
			/>
			<input
				type='text'
				placeholder='رمز الدولة (مثال: EG)'
				value={code}
				onChange={(e) => setCode(e.target.value)}
				maxLength={2}
				className='w-full mb-3 px-3 py-2 border rounded uppercase focus:outline-none focus:ring-2 focus:ring-blue-500'
			/>
			<input
				type='text'
				placeholder='علم الدولة (إيموجي مثل 🇪🇬)'
				value={flag}
				onChange={(e) => setFlag(e.target.value)}
				maxLength={2}
				className='w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
			/>

			<button
				onClick={handleAddCountry}
				className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition'>
				إضافة دولة
			</button>

			<hr className='my-6' />

			<h3 className='text-xl font-semibold mb-3'>الدول المضافة:</h3>
			<ul className='space-y-2 max-h-60 overflow-auto'>
				{countries.map((c) => (
					<li
						key={c.code}
						className='flex items-center gap-3 border p-2 rounded hover:bg-gray-100'>
						<span className='text-2xl'>{c.flag}</span>
						<span className='font-medium'>{c.name}</span>
						<span className='ml-auto text-sm text-gray-500'>{c.code}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default AddCountryForm;
