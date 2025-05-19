'use client';

import React, { useState } from 'react';

type Product = {
	id: number;
	name: string;
	description: string;
	price: number;
	quantity: number;
};

const AddProductForm = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [quantity, setQuantity] = useState('');
	const [error, setError] = useState('');

	const handleAddProduct = () => {
		if (!name || !description || !price || !quantity) {
			setError('يرجى ملء جميع الحقول');
			return;
		}
		const priceNum = parseFloat(price);
		const quantityNum = parseInt(quantity);

		if (isNaN(priceNum) || priceNum < 0) {
			setError('الرجاء إدخال سعر صحيح');
			return;
		}
		if (isNaN(quantityNum) || quantityNum < 0) {
			setError('الرجاء إدخال كمية صحيحة');
			return;
		}

		setError('');
		const newProduct: Product = {
			id: Date.now(),
			name,
			description,
			price: priceNum,
			quantity: quantityNum,
		};

		setProducts([...products, newProduct]);

		// تفريغ الحقول
		setName('');
		setDescription('');
		setPrice('');
		setQuantity('');
	};

	return (
		<div className='max-w-md mx-auto p-6 bg-white rounded shadow'>
			<h2 className='text-2xl font-bold mb-4 text-center'>إضافة منتج جديد</h2>

			{error && <p className='mb-4 text-red-600 text-center'>{error}</p>}

			<input
				type='text'
				placeholder='اسم المنتج'
				value={name}
				onChange={(e) => setName(e.target.value)}
				className='w-full mb-3 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500'
			/>
			<textarea
				placeholder='وصف المنتج'
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				rows={3}
				className='w-full mb-3 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500'
			/>
			<input
				type='text'
				placeholder='السعر'
				value={price}
				onChange={(e) => setPrice(e.target.value)}
				className='w-full mb-3 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500'
			/>
			<input
				type='number'
				placeholder='الكمية'
				value={quantity}
				onChange={(e) => setQuantity(e.target.value)}
				className='w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500'
				min={0}
			/>

			<button
				onClick={handleAddProduct}
				className='w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition'>
				إضافة المنتج
			</button>

			{products.length > 0 && (
				<>
					<hr className='my-6' />
					<h3 className='text-xl font-semibold mb-3'>المنتجات المضافة:</h3>
					<ul className='space-y-3 max-h-60 overflow-auto'>
						{products.map((p) => (
							<li
								key={p.id}
								className='border p-3 rounded hover:bg-gray-100'>
								<p>
									<strong>الاسم:</strong> {p.name}
								</p>
								<p>
									<strong>الوصف:</strong> {p.description}
								</p>
								<p>
									<strong>السعر:</strong> {p.price.toFixed(2)} جنيه
								</p>
								<p>
									<strong>الكمية:</strong> {p.quantity}
								</p>
							</li>
						))}
					</ul>
				</>
			)}
		</div>
	);
};

export default AddProductForm;
