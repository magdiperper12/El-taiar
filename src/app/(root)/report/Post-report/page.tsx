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
			className='p-6 bg-primary dark:bg-darkprimary rounded-xl shadow-md'
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}>
			<h1 className='text-2xl font-bold mb-6 text-forth dark:text-darkforth'>
				بلاغات المنشورات
			</h1>

			<div className='overflow-auto'>
				<table className='min-w-full border border-secoundry dark:border-darksecoundry text-sm text-right'>
					<thead className='bg-third dark:bg-darkthird text-forth dark:text-darkforth'>
						<tr>
							<th className='p-3 border-b border-secoundry dark:border-darksecoundry'>
								#
							</th>
							<th className='p-3 border-b border-secoundry dark:border-darksecoundry'>
								عنوان المنشور
							</th>
							<th className='p-3 border-b border-secoundry dark:border-darksecoundry'>
								اسم المُبلّغ
							</th>
							<th className='p-3 border-b border-secoundry dark:border-darksecoundry'>
								سبب البلاغ
							</th>
							<th className='p-3 border-b border-secoundry dark:border-darksecoundry'>
								عدد البلاغات
							</th>
							<th className='p-3 border-b border-secoundry dark:border-darksecoundry'>
								تاريخ البلاغ
							</th>
							<th className='p-3 border-b border-secoundry dark:border-darksecoundry'>
								الإجراءات
							</th>
						</tr>
					</thead>
					<tbody>
						{dummyPostReports.map((report, index) => (
							<tr
								key={report.id}
								className='border-b border-secoundry dark:border-darksecoundry hover:bg-forth dark:hover:bg-darkforth text-forth dark:text-darkforth'>
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
									<button className='border border-secoundry dark:border-darksecoundry text-third dark:text-darkthird px-3 py-1 rounded hover:bg-third dark:hover:bg-darkthird text-xs'>
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
