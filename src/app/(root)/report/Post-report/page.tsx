'use client';

import { motion } from 'framer-motion';

type PostReport = {
	id: number;
	postTitle: string;
	reporterName: string;
	reason: string;
	reportCount: number;
	date: string;
};

const dummyPostReports: PostReport[] = [
	{
		id: 1,
		postTitle: 'منشور مسيء عن السياسة',
		reporterName: 'سارة محمود',
		reason: 'كلام مسيء ومحرض',
		reportCount: 7,
		date: '2025-05-17',
	},
	{
		id: 2,
		postTitle: 'منشور يحتوي على محتوى غير لائق',
		reporterName: 'محمد علي',
		reason: 'صور غير مناسبة',
		reportCount: 4,
		date: '2025-05-16',
	},
];

const PostReportPage = () => {
	return (
		<motion.div
			className='p-6 bg-white rounded-xl shadow-md'
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}>
			<h1 className='text-2xl font-bold mb-6'>بلاغات المنشورات</h1>

			<div className='overflow-auto'>
				<table className='min-w-full border border-gray-200 text-sm text-right'>
					<thead className='bg-gray-500'>
						<tr>
							<th className='p-3 border-b'>#</th>
							<th className='p-3 border-b'>عنوان المنشور</th>
							<th className='p-3 border-b'>اسم المُبلّغ</th>
							<th className='p-3 border-b'>سبب البلاغ</th>
							<th className='p-3 border-b'>عدد البلاغات</th>
							<th className='p-3 border-b'>تاريخ البلاغ</th>
							<th className='p-3 border-b'>الإجراءات</th>
						</tr>
					</thead>
					<tbody>
						{dummyPostReports.map((report, index) => (
							<tr
								key={report.id}
								className='border-b hover:bg-gray-50 text-gray-800'>
								<td className='p-3'>{index + 1}</td>
								<td className='p-3'>{report.postTitle}</td>
								<td className='p-3'>{report.reporterName}</td>
								<td className='p-3 max-w-xs truncate'>{report.reason}</td>
								<td className='p-3'>{report.reportCount}</td>
								<td className='p-3'>{report.date}</td>
								<td className='p-3 space-x-2 space-x-reverse'>
									<button className='bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-xs'>
										حذف المنشور
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

export default PostReportPage;
