'use client';

import { useState } from 'react';
import { BsFileText, BsPlusCircle } from 'react-icons/bs';
import { GiChicken, GiCycle } from 'react-icons/gi';
import { motion, AnimatePresence } from 'framer-motion';
import Chick from './chick/page';
import Chicken from './chicken/page';
import Country from './country/page';
import Eggs from './eggs/page';
import Dollar from './dollar/page';
import Feed from './feed/page';
import Gold from './gold/page';
import { BiWorld } from 'react-icons/bi';
import { TbEggs } from 'react-icons/tb';
import { SiFeedly } from 'react-icons/si';
import { AiFillGolden } from 'react-icons/ai';
import { FaSackDollar } from 'react-icons/fa6';

function price() {
	const [active, setActive] = useState<
		'chick' | 'chicken' | 'country' | 'dollar' | 'eggs' | 'feed' | 'gold'
	>('chick');

	const tabClass = (tab: string) =>
		`flex items-center gap-2 rounded-2xl py-3 px-6 text-sm md:text-lg transition-all duration-300 shadow-sm border ${
			active === tab
				? 'bg-orange-500 text-white shadow-lg scale-105'
				: 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-600'
		}`;

	const sectionVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: 'easeOut' },
		},
		exit: { opacity: 0, y: -30, transition: { duration: 0.4, ease: 'easeIn' } },
	};

	return (
		<div className='w-full min-h-screen pt-20 px-4 custom-scroll bg-gray-50'>
			{/* Header Tabs */}
			<header className='flex gap-4 md:gap-6 items-center justify-center mb-10'>
				<button
					onClick={() => setActive('country')}
					className={`${tabClass(
						'country'
					)} flex items-center  justify-center flex-col w-32`}>
					<BiWorld size={30} />
					country
				</button>
				<button
					onClick={() => setActive('chicken')}
					className={`${tabClass(
						'chicken'
					)} flex items-center  justify-center flex-col w-32`}>
					<GiChicken size={30} />
					chicken
				</button>{' '}
				<button
					onClick={() => setActive('chick')}
					className={`${tabClass(
						'chick'
					)} flex items-center  justify-center flex-col w-32`}>
					<GiCycle size={30} />
					chick
				</button>{' '}
				<button
					onClick={() => setActive('eggs')}
					className={`${tabClass(
						'eggs'
					)} flex items-center  justify-center flex-col w-32`}>
					<TbEggs size={30} />
					eggs
				</button>
				<button
					onClick={() => setActive('feed')}
					className={`${tabClass(
						'feed'
					)} flex items-center  justify-center flex-col w-32`}>
					<SiFeedly size={30} />
					feed
				</button>
				<button
					onClick={() => setActive('dollar')}
					className={`${tabClass(
						'dollar'
					)} flex items-center  justify-center flex-col w-32`}>
					<FaSackDollar size={30} />
					dollar
				</button>
				<button
					onClick={() => setActive('gold')}
					className={`${tabClass(
						'gold'
					)} flex items-center  justify-center flex-col w-32`}>
					<AiFillGolden size={30} />
					gold
				</button>
			</header>
			{/* Animated Content */}
			// 'chick' | 'chicken' | 'country' | 'dollar' | 'eggs' | 'feed' | 'gold'
			<main className='w-full max-w-5xl mx-auto px-2'>
				<AnimatePresence mode='wait'>
					{active === 'chick' && (
						<motion.div
							key='chick'
							variants={sectionVariants}
							initial='hidden'
							animate='visible'
							exit='exit'>
							<Chick />
						</motion.div>
					)}

					{active === 'chicken' && (
						<motion.div
							key='chicken'
							variants={sectionVariants}
							initial='hidden'
							animate='visible'
							exit='exit'>
							<Chicken />
						</motion.div>
					)}

					{active === 'country' && (
						<motion.div
							key='country'
							variants={sectionVariants}
							initial='hidden'
							animate='visible'
							exit='exit'>
							<Country />
						</motion.div>
					)}
					{active === 'dollar' && (
						<motion.div
							key='dollar'
							variants={sectionVariants}
							initial='hidden'
							animate='visible'
							exit='exit'>
							<Dollar />
						</motion.div>
					)}
					{active === 'eggs' && (
						<motion.div
							key='eggs'
							variants={sectionVariants}
							initial='hidden'
							animate='visible'
							exit='exit'>
							<Eggs />
						</motion.div>
					)}
					{active === 'feed' && (
						<motion.div
							key='feed'
							variants={sectionVariants}
							initial='hidden'
							animate='visible'
							exit='exit'>
							<Feed />
						</motion.div>
					)}
					{active === 'gold' && (
						<motion.div
							key='gold'
							variants={sectionVariants}
							initial='hidden'
							animate='visible'
							exit='exit'>
							<Gold />
						</motion.div>
					)}
				</AnimatePresence>
			</main>
		</div>
	);
}

export default price;
