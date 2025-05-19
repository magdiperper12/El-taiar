'use client';

import React, { useState } from 'react';

const NewPriceInput = () => {
	const [price, setPrice] = useState<number | ''>('');
	const [error, setError] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const val = e.target.value;
		if (val === '') {
			setPrice('');
			setError('');
			return;
		}

		// السماح فقط للأرقام مع فواصل عشرية
		if (!/^\d*\.?\d*$/.test(val)) {
			setError('يرجى إدخال رقم صحيح');
			return;
		}

		const numVal = parseFloat(val);
		if (numVal < 0) {
			setError('السعر لا يمكن أن يكون سالبًا');
			return;
		}

		setPrice(numVal);
		setError('');
	};

	return (
		<div className='max-w-sm mx-auto p-4 bg-white rounded shadow'>
			<label
				htmlFor='price'
				className='block mb-2 font-semibold text-gray-700'>
				السعر الجديد
			</label>
			<input
				id='price'
				type='text'
				value={price === '' ? '' : price}
				onChange={handleChange}
				placeholder='أدخل السعر'
				className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500'
			/>
			{error && <p className='mt-1 text-red-600'>{error}</p>}

			{price !== '' && !error && (
				<p className='mt-3 text-green-700 font-semibold'>
					السعر المدخل: {price.toFixed(2)} جنيه
				</p>
			)}
		</div>
	);
};

export default NewPriceInput;
