import React from 'react';
import Product from '../../Components/Product';
import MarketSideBar from './MarketSideBar';

const Market = () => {
	return (
		<section className='flex flex-row gap-[16px]'>
			<MarketSideBar />
			<div className='w-full'>
				<div className='grid grid-cols-3 gap-[23.224px] w-full'>
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
				</div>
			</div>
		</section>
	);
};

export default Market;
