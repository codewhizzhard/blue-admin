import React from 'react';

import StarRating from 'reactjs-star-rating';
import ProductImg from '../assets/productImg.png';
const Product = () => {
	return (
		<figure className='bg-white w-full flex flex-col p-[14.149px] rounded-[20.643px]'>
			<img
				src={ProductImg}
				alt='product img'
				className='h-[ 202.661px] object-cover'
			/>
			<h1 className='pt-2 text-[13px] font-Kumbh font-medium capitalize'>
				Orthopedic Shoes
			</h1>
			<figcaption className='flex flex-col gap-[8px] mt-[18px]'>
				<div className='after:w-full after:bg-bg after:h-[1px] after:mt-[5px] after:block before:w-full before:bg-bg before:h-[1px] before:mb-[5px] before:block '>
					<div className='flex flex-row items-center gap-3 '>
						<h1 className='font-bold text-[18px] text-[#1c1d1fb3] font-Kumbh '>
							N15,000
						</h1>
						<span className='line-through text-[#9B9B9B] text-[11px] font-Kumbh'>
							4000
						</span>
						<span className='bg-[#FF3B3B]/20 font-Kumbh flex justify-center items-center px-[0.7rem] py-[0.7rem] text-[8.085px]  text-[#FF3B3B] font-medium  w-[29.244px] rounded-[6.451px] h-[18.062px]'>
							-37%
						</span>
					</div>
				</div>
				<p className='font-Kumbh flex gap-1 font-medium text-[11px] '>
					<span className='text-mediumGray'>Posted by</span>
					<span className='text-primaryBlue'>Muhammed Salam</span>
				</p>
				<span className='text-[11px] font-medium text-[#11B833]'>#shop</span>
				<p className='flex items-center gap-2'>
					<StarRating
						color='#DBDBDB'
						showLabel={false}
						size={20}
						defaultRating={2}
						maxRating={5}
						onSetRating={(rating) => console.log(rating)}
						className=''
					/>
					<span className='text-[11px] text-mediumGray'>(7 Avaliable)</span>
				</p>
			</figcaption>
		</figure>
	);
};

export default Product;
