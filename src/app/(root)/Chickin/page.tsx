'use client';

import React from 'react';

type Chicken = {
	id: number;
	name: string;
	breed: string;
	age: number; // بالأسابيع أو الشهور
	color: string;
	image: string;
	description: string;
};

const sampleChicken: Chicken = {
	id: 1,
	name: 'دجاجة بيضاء',
	breed: 'لوبستر',
	age: 12,
	color: 'أبيض',
	image:
		'https://images.unsplash.com/photo-1601758174554-0c2f66f45b62?auto=format&fit=crop&w=400&q=80',
	description: 'دجاجة صحية ونشيطة، مناسبة لتربية البيض واللحم.',
};

const ChickenCard = ({ chicken }: { chicken: Chicken }) => {
	return (
		<div className='max-w-sm rounded overflow-hidden shadow-lg bg-white'>
			<img
				className='w-full h-48 object-cover'
				src={chicken.image}
				alt={chicken.name}
			/>
			<div className='px-6 py-4'>
				<div className='font-bold text-xl mb-2'>{chicken.name}</div>
				<p className='text-gray-700 text-base mb-2'>{chicken.description}</p>
				<ul className='text-gray-600 text-sm'>
					<li>
						<strong>السلالة:</strong> {chicken.breed}
					</li>
					<li>
						<strong>العمر:</strong> {chicken.age} أسبوع
					</li>
					<li>
						<strong>اللون:</strong> {chicken.color}
					</li>
				</ul>
			</div>
		</div>
	);
};

// مثال استخدام
const ChickenComponentDemo = () => {
	return (
		<div className='p-6 flex justify-center'>
			<ChickenCard chicken={sampleChicken} />
		</div>
	);
};

export default ChickenComponentDemo;
