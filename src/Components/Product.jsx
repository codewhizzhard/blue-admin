import React from 'react';
import StarRating from '@mil-rlib/reactjs-star-rating';
import ProductImg from '../assets/productImg.png';
const Product = () => {
	return (
		<figure className='bg-white w-full flex flex-col p-[14.149px] rounded-[20.643px]'>
			<img
				src={ProductImg}
				alt='product img'
				className='h-[ 202.661px] object-cover'
			/>
			<h1 className='pt-2 text-[13px] font-medium capitalize'>
				Orthopedic Shoes
			</h1>
			<figcaption className='flex flex-col gap-[8px] mt-[18px]'>
				<div className='flex flex-row items-center gap-3'>
					<h1 className='font-bold text-[18px] text-[#1c1d1fb3] '>N15,000</h1>
					<span className='line-through text-[#9B9B9B] text-[11px]'>4000</span>
					<span className='bg-[#FF3B3B]/20 flex justify-center items-center px-[0.7rem] py-[0.7rem] text-[8.085px]  text-[#FF3B3B] font-medium font-publicSans w-[29.244px] rounded-[6.451px] h-[18.062px]'>
						-37%
					</span>
				</div>
				<p>
					<span>Posted by</span>
					<span>Muhammed Salam</span>
				</p>
				<span>#shop</span>
			</figcaption>
		</figure>
	);
};

export default Product;
