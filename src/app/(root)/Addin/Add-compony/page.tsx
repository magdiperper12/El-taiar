'use client';

import React, { useState } from 'react';

type Company = {
	id: number;
	name: string;
	address: string;
	phone: string;
	email: string;
};

const AddCompanyForm = () => {
	const [companies, setCompanies] = useState<Company[]>([]);
	const [name, setName] = useState('');
	const [address, setAddress] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');

	const handleAddCompany = () => {
		if (!name || !address || !phone || !email) {
			setError('يرجى ملء جميع الحقول');
			return;
		}
		// تحقق بسيط من البريد الإلكتروني
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			setError('يرجى إدخال بريد إلكتروني صالح');
			return;
		}
		setError('');

		const newCompany: Company = {
			id: Date.now(),
			name,
			address,
			phone,
			email,
		};

		setCompanies([...companies, newCompany]);
		setName('');
		setAddress('');
		setPhone('');
		setEmail('');
	};

	return (
		<div className='max-w-md mx-auto p-6 bg-white rounded shadow'>
			<h2 className='text-2xl font-bold mb-4 text-center'>إضافة شركة جديدة</h2>

			{error && <p className='mb-4 text-red-600 text-center'>{error}</p>}

			<input
				type='text'
				placeholder='اسم الشركة'
				value={name}
				onChange={(e) => setName(e.target.value)}
				className='w-full mb-3 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
			/>
			<input
				type='text'
				placeholder='العنوان'
				value={address}
				onChange={(e) => setAddress(e.target.value)}
				className='w-full mb-3 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
			/>
			<input
				type='text'
				placeholder='رقم الهاتف'
				value={phone}
				onChange={(e) => setPhone(e.target.value)}
				className='w-full mb-3 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
			/>
			<input
				type='email'
				placeholder='البريد الإلكتروني'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				className='w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
			/>

			<button
				onClick={handleAddCompany}
				className='w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition'>
				إضافة الشركة
			</button>

			{companies.length > 0 && (
				<>
					<hr className='my-6' />
					<h3 className='text-xl font-semibold mb-3'>الشركات المضافة:</h3>
					<ul className='space-y-3 max-h-60 overflow-auto'>
						{companies.map((c) => (
							<li
								key={c.id}
								className='border p-3 rounded hover:bg-gray-100'>
								<p>
									<strong>الاسم:</strong> {c.name}
								</p>
								<p>
									<strong>العنوان:</strong> {c.address}
								</p>
								<p>
									<strong>الهاتف:</strong> {c.phone}
								</p>
								<p>
									<strong>البريد الإلكتروني:</strong> {c.email}
								</p>
							</li>
						))}
					</ul>
				</>
			)}
		</div>
	);
};

export default AddCompanyForm;
