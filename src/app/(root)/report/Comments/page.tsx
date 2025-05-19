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
			className='p-6 bg-white rounded-xl shadow-md'
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}>
			<h1 className='text-2xl font-bold mb-6'>بلاغات التعليقات</h1>

			<div className='overflow-auto'>
				<table className='min-w-full border border-gray-200 text-sm text-right'>
					<thead className='bg-gray-600'>
						<tr>
							<th className='p-3 border-b'>#</th>
							<th className='p-3 border-b'>محتوى التعليق</th>
							<th className='p-3 border-b'>اسم المعلّق</th>
							<th className='p-3 border-b'>سبب البلاغ</th>
							<th className='p-3 border-b'>عدد البلاغات</th>
							<th className='p-3 border-b'>تاريخ البلاغ</th>
							<th className='p-3 border-b'>الإجراءات</th>
						</tr>
					</thead>
					<tbody>
						{dummyCommentReports.map((report, index) => (
							<tr
								key={report.id}
								className='border-b hover:bg-gray-50 text-gray-800'>
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

export default CommentReportPage;
