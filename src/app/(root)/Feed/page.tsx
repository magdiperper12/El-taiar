'use client';

import React from 'react';

type Feed = {
	id: number;
	name: string;
	type: string; // نوع العلف (مثلاً: حبوب، علف متكامل، أعلاف عادية)
	quantityKg: number; // الكمية بالكيلوغرام
	description: string;
	image: string;
};

const sampleFeed: Feed = {
	id: 1,
	name: 'علف الدجاج',
	type: 'حبوب',
	quantityKg: 25,
	description: 'علف عالي الجودة لتغذية الدجاج والطيور بشكل متكامل.',
	image:
		'https://images.unsplash.com/photo-1601924638867-3a4f4425db88?auto=format&fit=crop&w=400&q=80',
};

const FeedCard = ({ feed }: { feed: Feed }) => {
	return (
		<div className='max-w-sm rounded overflow-hidden shadow-lg bg-white'>
			<img
				src={feed.image}
				alt={feed.name}
				className='w-full h-48 object-cover'
			/>
			<div className='px-6 py-4'>
				<div className='font-bold text-xl mb-2'>{feed.name}</div>
				<p className='text-gray-700 text-base mb-2'>{feed.description}</p>
				<ul className='text-gray-600 text-sm'>
					<li>
						<strong>النوع:</strong> {feed.type}
					</li>
					<li>
						<strong>الكمية:</strong> {feed.quantityKg} كجم
					</li>
				</ul>
			</div>
		</div>
	);
};

// مثال استخدام
const FeedComponentDemo = () => {
	return (
		<div className='p-6 flex justify-center'>
			<FeedCard feed={sampleFeed} />
		</div>
	);
};

export default FeedComponentDemo;
