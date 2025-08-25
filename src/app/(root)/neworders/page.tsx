// app/orders/page.tsx (App Router)
// أو pages/orders.tsx لو Pages Router

'use client';

import { useState } from 'react';

export default function OrderPage() {
	const [deliveryMethod, setDeliveryMethod] = useState('express');
	const [paymentMethod, setPaymentMethod] = useState('cod');

	return (
		<main className='min-h-screen bg-gray-50 p-6'>
			<h1 className='text-2xl font-semibold mb-6'>Create New Order</h1>

			<div className='grid md:grid-cols-3 gap-6'>
				{/* Left Side */}
				<div className='md:col-span-2 space-y-6'>
					{/* Customer Details */}
					<div className='bg-white rounded-xl shadow p-6'>
						<h2 className='text-lg font-semibold mb-4'>Customer Details</h2>
						<input
							type='text'
							placeholder='Search customer...'
							className='w-full border px-3 py-2 rounded-lg mb-4'
						/>
						<div className='grid md:grid-cols-2 gap-4'>
							<input
								type='text'
								placeholder='Customer Name'
								className='border px-3 py-2 rounded-lg'
							/>
							<input
								type='text'
								placeholder='Contact Number'
								className='border px-3 py-2 rounded-lg'
							/>
						</div>
						<input
							type='email'
							placeholder='Email Address'
							className='mt-4 w-full border px-3 py-2 rounded-lg'
						/>
					</div>

					{/* Delivery Address */}
					<div className='bg-white rounded-xl shadow p-6'>
						<h2 className='text-lg font-semibold mb-4'>Delivery Address</h2>
						<input
							type='text'
							placeholder='Street Address'
							className='w-full border px-3 py-2 rounded-lg mb-4'
						/>
						<div className='grid md:grid-cols-2 gap-4 mb-4'>
							<input
								type='text'
								placeholder='City'
								className='border px-3 py-2 rounded-lg'
							/>
							<input
								type='text'
								placeholder='State/Province'
								className='border px-3 py-2 rounded-lg'
							/>
						</div>
						<div className='grid md:grid-cols-2 gap-4 mb-4'>
							<input
								type='text'
								placeholder='ZIP/Postal Code'
								className='border px-3 py-2 rounded-lg'
							/>
							<input
								type='text'
								placeholder='Country'
								className='border px-3 py-2 rounded-lg'
							/>
						</div>
						<textarea
							placeholder='Delivery Instructions'
							className='w-full border px-3 py-2 rounded-lg'
							rows={3}></textarea>
					</div>

					{/* Payment Method */}
					<div className='bg-white rounded-xl shadow p-6'>
						<h2 className='text-lg font-semibold mb-4'>Payment Method</h2>
						<div className='grid md:grid-cols-2 gap-4'>
							<div
								onClick={() => setPaymentMethod('cod')}
								className={`p-4 border rounded-xl cursor-pointer ${
									paymentMethod === 'cod' ? 'border-blue-500 bg-blue-50' : ''
								}`}>
								<h3 className='font-medium'>💵 Cash on Delivery</h3>
								<p className='text-sm text-gray-500'>
									Pay when you receive your order
								</p>
							</div>
							<div
								onClick={() => setPaymentMethod('online')}
								className={`p-4 border rounded-xl cursor-pointer ${
									paymentMethod === 'online' ? 'border-blue-500 bg-blue-50' : ''
								}`}>
								<h3 className='font-medium'>💳 Online Payment</h3>
								<p className='text-sm text-gray-500'>Pay securely online</p>
							</div>
						</div>
					</div>
				</div>

				{/* Right Side */}
				<div className='space-y-6'>
					{/* Order Details */}
					<div className='bg-white rounded-xl shadow p-6'>
						<h2 className='text-lg font-semibold mb-4'>Order Details</h2>
						<input
							type='datetime-local'
							className='w-full border px-3 py-2 rounded-lg mb-4'
						/>
						<div className='space-y-2'>
							<div className='flex justify-between'>
								<span>Item 1</span>
								<span>$29.99</span>
							</div>
							<div className='flex justify-between'>
								<span>Item 2</span>
								<span>$49.99</span>
							</div>
						</div>
					</div>

					{/* Choose Delivery Partner */}
					<div className='bg-white rounded-xl shadow p-6'>
						<h2 className='text-lg font-semibold mb-4'>
							Choose Delivery Partner
						</h2>
						<div
							onClick={() => setDeliveryMethod('express')}
							className={`flex items-center justify-between border rounded-lg px-3 py-2 mb-3 cursor-pointer ${
								deliveryMethod === 'express' ? 'border-blue-500 bg-blue-50' : ''
							}`}>
							<div>
								<p className='font-medium'>Express Delivery</p>
								<p className='text-sm text-gray-500'>1-2 hours</p>
							</div>
							<span className='font-medium text-blue-600'>$5.99</span>
						</div>
						<div
							onClick={() => setDeliveryMethod('standard')}
							className={`flex items-center justify-between border rounded-lg px-3 py-2 cursor-pointer ${
								deliveryMethod === 'standard'
									? 'border-blue-500 bg-blue-50'
									: ''
							}`}>
							<div>
								<p className='font-medium'>Standard Delivery</p>
								<p className='text-sm text-gray-500'>3-5 hours</p>
							</div>
							<span className='font-medium text-blue-600'>$3.99</span>
						</div>
					</div>

					{/* Cost Summary */}
					<div className='bg-white rounded-xl shadow p-6'>
						<h2 className='text-lg font-semibold mb-4'>Cost Summary</h2>
						<div className='flex justify-between mb-2'>
							<span>Subtotal</span>
							<span>$79.98</span>
						</div>
						<div className='flex justify-between mb-2'>
							<span>Delivery Fee</span>
							<span>{deliveryMethod === 'express' ? '$5.99' : '$3.99'}</span>
						</div>
						<div className='flex justify-between mb-2'>
							<span>Tax</span>
							<span>$8.00</span>
						</div>
						<div className='flex justify-between font-semibold text-lg'>
							<span>Total</span>
							<span className='text-blue-600'>$93.97</span>
						</div>
					</div>

					{/* Submit Button */}
					<button className='w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700'>
						Submit Order
					</button>
				</div>
			</div>
		</main>
	);
}
