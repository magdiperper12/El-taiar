'use client';

import { motion } from 'framer-motion';

type CommentReport = {
	id: number;
	commentContent: string;
	commenterName: string;
	reason: string;
	reportCount: number;
	date: string;
};

const dummyCommentReports: CommentReport[] = [
	{
		id: 1,
		commentContent: 'هذا تعليق غير لائق تماماً!',
		commenterName: 'خالد محمد',
		reason: 'ألفاظ خارجة',
		reportCount: 6,
		date: '2025-05-17',
	},
	{
		id: 2,
		commentContent: 'منشور تافه ولا يستحق النشر',
		commenterName: 'سمر حسين',
		reason: 'تنمر وسخرية',
		reportCount: 3,
		date: '2025-05-16',
	},
];

const CommentReportPage = () => {
	return (
		<motion.div
			className='p-6 bg-primary dark:bg-darkprimary rounded-xl shadow-md'
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}>
			<h1 className='text-2xl font-bold mb-6 text-forth dark:text-darkforth'>
				بلاغات التعليقات
			</h1>

			<div className='overflow-auto'>
				<table className='min-w-full border border-secoundry dark:border-darksecoundry text-sm text-right'>
					<thead className='bg-third dark:bg-darkthird text-forth dark:text-darkforth'>
						<tr>
							<th className='p-3 border-b border-secoundry dark:border-darksecoundry'>
								#
							</th>
							<th className='p-3 border-b border-secoundry dark:border-darksecoundry'>
								محتوى التعليق
							</th>
							<th className='p-3 border-b border-secoundry dark:border-darksecoundry'>
								اسم المعلّق
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
						{dummyCommentReports.map((report, index) => (
							<tr
								key={report.id}
								className='border-b border-secoundry dark:border-darksecoundry hover:bg-forth dark:hover:bg-darkforth text-forth dark:text-darkforth'>
								<td className='p-3'>{index + 1}</td>
								<td className='p-3 max-w-xs truncate'>
									{report.commentContent}
								</td>
								<td className='p-3'>{report.commenterName}</td>
								<td className='p-3 max-w-xs truncate'>{report.reason}</td>
								<td className='p-3'>{report.reportCount}</td>
								<td className='p-3'>{report.date}</td>
								<td className='p-3 space-x-2 space-x-reverse'>
									<button className='bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-xs'>
										حذف التعليق
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

export default CommentReportPage;
