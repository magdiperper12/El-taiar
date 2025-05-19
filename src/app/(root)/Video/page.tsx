'use client';

import React, { useState } from 'react';

type Video = {
	id: number;
	title: string;
	description: string;
	url: string;
	category: string;
	thumbnail: string;
};

const videosData: Video[] = [
	{
		id: 1,
		title: 'تعلم React من الصفر',
		description: 'دورة كاملة للمبتدئين في React.',
		url: 'https://www.youtube.com/embed/dGcsHMXbSOA',
		category: 'تعليم',
		thumbnail: 'https://img.youtube.com/vi/dGcsHMXbSOA/hqdefault.jpg',
	},
	{
		id: 2,
		title: 'مقدمة في Tailwind CSS',
		description: 'شرح سريع ومفصل لـ Tailwind CSS.',
		url: 'https://www.youtube.com/embed/dFgzHOX84xQ',
		category: 'تصميم',
		thumbnail: 'https://img.youtube.com/vi/dFgzHOX84xQ/hqdefault.jpg',
	},
	{
		id: 3,
		title: 'JavaScript للمبتدئين',
		description: 'أساسيات لغة الجافاسكربت.',
		url: 'https://www.youtube.com/embed/hdI2bqOjy3c',
		category: 'برمجة',
		thumbnail: 'https://img.youtube.com/vi/hdI2bqOjy3c/hqdefault.jpg',
	},
];

const categories = ['الكل', 'تعليم', 'تصميم', 'برمجة'];

const VideoLibrary = () => {
	const [search, setSearch] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('الكل');
	const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

	const filteredVideos = videosData.filter((video) => {
		const matchesCategory =
			selectedCategory === 'الكل' || video.category === selectedCategory;
		const matchesSearch =
			video.title.includes(search) || video.description.includes(search);
		return matchesCategory && matchesSearch;
	});

	return (
		<div className='p-6 max-w-7xl mx-auto text-gray-800'>
			<h2 className='text-3xl font-bold mb-6'>مكتبة الفيديوهات</h2>

			{/* البحث والتصنيف */}
			<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4'>
				<input
					type='text'
					placeholder='ابحث عن فيديو...'
					className='border border-gray-300 rounded px-4 py-2 w-full sm:w-64'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>

				<select
					className='border border-gray-300 rounded px-4 py-2'
					value={selectedCategory}
					onChange={(e) => setSelectedCategory(e.target.value)}>
					{categories.map((cat) => (
						<option
							key={cat}
							value={cat}>
							{cat}
						</option>
					))}
				</select>
			</div>

			{/* قائمة الفيديوهات */}
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				{filteredVideos.length === 0 && (
					<p className='col-span-full text-center text-gray-500'>
						لا يوجد فيديوهات مطابقة
					</p>
				)}

				{filteredVideos.map((video) => (
					<div
						key={video.id}
						className='border rounded shadow hover:shadow-lg cursor-pointer'
						onClick={() => setSelectedVideo(video)}>
						<img
							src={video.thumbnail}
							alt={video.title}
							className='w-full h-40 object-cover rounded-t'
						/>
						<div className='p-4'>
							<h3 className='text-lg font-semibold'>{video.title}</h3>
							<p className='text-gray-600 text-sm mt-1'>{video.description}</p>
						</div>
					</div>
				))}
			</div>

			{/* عرض الفيديو المختار */}
			{selectedVideo && (
				<div className='fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center p-4 z-50'>
					<div className='bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto relative'>
						<button
							className='absolute top-3 right-3 text-gray-700 hover:text-gray-900 text-2xl font-bold'
							onClick={() => setSelectedVideo(null)}
							aria-label='إغلاق'>
							×
						</button>
						<iframe
							className='w-full aspect-video rounded-t-lg'
							src={selectedVideo.url}
							title={selectedVideo.title}
							allowFullScreen
						/>
						<div className='p-4'>
							<h3 className='text-xl font-bold'>{selectedVideo.title}</h3>
							<p className='mt-2 text-gray-700'>{selectedVideo.description}</p>
							<p className='mt-1 text-sm text-gray-500'>
								التصنيف: {selectedVideo.category}
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default VideoLibrary;
