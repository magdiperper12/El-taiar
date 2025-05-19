'use client';

import React from 'react';

type Chick = {
	id: number;
	name: string;
	ageDays: number; // العمر بالأيام
	color: string;
	image: string;
	description: string;
};

const sampleChick: Chick = {
	id: 1,
	name: 'صوص أصفر',
	ageDays: 5,
	color: 'أصفر',
	image:
		'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=400&q=80',
	description: 'صوص صغير ونشيط مناسب للتربية والاهتمام.',
};

const ChickCard = ({ chick }: { chick: Chick }) => {
	return (
		<div className='max-w-sm rounded overflow-hidden shadow-lg bg-white'>
			<img
				className='w-full h-48 object-cover'
				src={chick.image}
				alt={chick.name}
			/>
			<div className='px-6 py-4'>
				<div className='font-bold text-xl mb-2'>{chick.name}</div>
				<p className='text-gray-700 text-base mb-2'>{chick.description}</p>
				<ul className='text-gray-600 text-sm'>
					<li>
						<strong>العمر:</strong> {chick.ageDays} يوم
					</li>
					<li>
						<strong>اللون:</strong> {chick.color}
					</li>
				</ul>
			</div>
		</div>
	);
};

// مثال استخدام
const ChickComponentDemo = () => {
	return (
		<div className='p-6 flex justify-center'>
			<ChickCard chick={sampleChick} />
		</div>
	);
};

export default ChickComponentDemo;
