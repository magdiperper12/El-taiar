'use client'; // إذا كنت تستخدم app router
import { motion } from 'framer-motion';
import Dashboard from './dashboard';

const Hero = () => {
	return (
		<div className='p-6 space-y-8'>
			{/* العنوان */}
			<motion.h1
				className='text-3xl font-bold text-darkprimary dark:text-secoundry transition-colors duration-300'
				initial={{ y: -30, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6 }}>
				لوحة التحكم - الصفحة الرئيسية
			</motion.h1>
			{/* البطاقات */}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
				{[
					{ label: 'عدد المستخدمين', value: '1200' },
					{ label: 'الاشخاص النشطه الان', value: '8' },
					{ label: 'الزيارات اليوم', value: '320' },
					{ label: 'الزيارات اليوم', value: '320' },
				].map((item, index) => (
					<motion.div
						key={index}
						className={` ${
							index % 2 == 0 ? 'bg-[#EFF6FF]' : 'bg-[#F0FDF4]'
						}  dark:bg-darkprimary shadow-md p-5 rounded-2xl transition-colors duration-300`}
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.1 * index }}>
						<p
							className={`${
								index % 2 == 0 ? 'text-blue-700' : 'text-red-500'
							}   dark:text-darkthird`}>
							{item.label}
						</p>
						<p
							className={`${
								index % 2 == 0 ? 'text-blue-700' : 'text-red-500'
							} text-2xl font-bold  dark:text-darksecoundry`}>
							{item.value}
						</p>
					</motion.div>
				))}
			</div>
			<Dashboard />
		</div>
	);
};

export default Hero;
