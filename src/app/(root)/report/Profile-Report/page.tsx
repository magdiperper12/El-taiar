'use client';

import { motion } from 'framer-motion';

type ProfileReport = {
	id: number;
	userName: string;
	userEmail: string;
	reason: string;
	reportCount: number;
	date: string;
};

const dummyProfileReports: ProfileReport[] = [
	{
		id: 1,
		userName: 'أحمد سعيد',
		userEmail: 'ahmed@email.com',
		reason: 'صورة الملف غير لائقة',
		reportCount: 5,
		date: '2025-05-17',
	},
	{
		id: 2,
		userName: 'منى عبد الرحمن',
		userEmail: 'mona@email.com',
		reason: 'معلومات مزيفة في الحساب',
		reportCount: 3,
		date: '2025-05-16',
	},
];

const ProfileReportPage = () => {
	return (
		<motion.div
			className='p-6 bg-white rounded-xl shadow-md'
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}>
			<h1 className='text-2xl font-bold mb-6'>بلاغات الحسابات</h1>

			<div className='overflow-auto'>
				<table className='min-w-full border border-gray-200 text-sm text-right'>
					<thead className='bg-gray-500'>
						<tr>
							<th className='p-3 border-b'>#</th>
							<th className='p-3 border-b'>الاسم</th>
							<th className='p-3 border-b'>البريد الإلكتروني</th>
							<th className='p-3 border-b'>سبب البلاغ</th>
							<th className='p-3 border-b'>عدد البلاغات</th>
							<th className='p-3 border-b'>تاريخ البلاغ</th>
							<th className='p-3 border-b'>الإجراءات</th>
						</tr>
					</thead>
					<tbody>
						{dummyProfileReports.map((report, index) => (
							<tr
								key={report.id}
								className='border-b hover:bg-gray-50 text-gray-800'>
								<td className='p-3'>{index + 1}</td>
								<td className='p-3'>{report.userName}</td>
								<td className='p-3'>{report.userEmail}</td>
								<td className='p-3 max-w-xs truncate'>{report.reason}</td>
								<td className='p-3'>{report.reportCount}</td>
								<td className='p-3'>{report.date}</td>
								<td className='p-3 space-x-2 space-x-reverse'>
									<button className='bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-xs'>
										تعليق الحساب
									</button>
									<button className='border border-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-100 text-xs'>
										تجاهل
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};

export default ProfileReportPage;
