'use client'; // إذا كنت تستخدم app router
import { motion } from 'framer-motion';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';

const data = [
	{ name: 'يناير', users: 400 },
	{ name: 'فبراير', users: 300 },
	{ name: 'مارس', users: 500 },
	{ name: 'أبريل', users: 200 },
	{ name: 'مايو', users: 600 },
];

const Hero = () => {
	return (
		<div className='p-6 space-y-8'>
			{/* العنوان */}
			<motion.h1
				className='text-3xl font-bold text-gray-800'
				initial={{ y: -30, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6 }}>
				لوحة التحكم - الصفحة الرئيسية
			</motion.h1>

			{/* البطاقات */}
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				{[
					{ label: 'عدد المستخدمين', value: '1200' },
					{ label: 'المشاريع النشطة', value: '8' },
					{ label: 'الزيارات اليوم', value: '320' },
				].map((item, index) => (
					<motion.div
						key={index}
						className='bg-white shadow-md p-5 rounded-2xl'
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.1 * index }}>
						<p className='text-gray-500'>{item.label}</p>
						<p className='text-2xl font-bold text-indigo-600'>{item.value}</p>
					</motion.div>
				))}
			</div>

			{/* الرسم البياني */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.4 }}
				className='bg-white p-6 rounded-2xl shadow-md'>
				<h2 className='text-lg font-semibold text-gray-700 mb-4'>
					نمو المستخدمين
				</h2>
				<ResponsiveContainer
					width='100%'
					height={300}>
					<LineChart data={data}>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='name' />
						<YAxis />
						<Tooltip />
						<Line
							type='monotone'
							dataKey='users'
							stroke='#6366f1'
							strokeWidth={3}
						/>
					</LineChart>
				</ResponsiveContainer>
			</motion.div>
		</div>
	);
};

export default Hero;
