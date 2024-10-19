import React from 'react';
import Product from '../../Components/Product';

const Market = () => {
	return (
		<section className='flex flex-row gap-[16px]'>
			<div className='flex flex-col gap-[24px] w-[306px]'>
				<div className='flex flex-col gap-[16px]'>
					<h1 className='font-publicSans font-medium text-[16px] uppercase text-textColor'>
						Category
					</h1>
					<div className='flex flex-col gap-[2px] category'>
						<span>
							<input type='radio' name='category' id='Eletronics' checked />
							<label htmlFor='Eletronics'>Eletronics Devices</label>
						</span>
						<span>
							<input type='radio' name='category' id='Computer' />
							<label htmlFor='Computer'> Computer & Laptop </label>
						</span>{' '}
						<span>
							<input type='radio' name='category' id='Accessories' />
							<label htmlFor='Accessories'> Computer Accessories</label>
						</span>{' '}
						<span>
							<input type='radio' name='category' id='SmartPhone' />
							<label htmlFor='SmartPhone'> SmartPhone</label>
						</span>
						<span>
							<input type='radio' name='category' id='Headphone' />
							<label htmlFor='Headphone'> Headphone</label>
						</span>
						<span>
							<input type='radio' name='category' id='Mobile' />
							<label htmlFor='Mobile'> Mobile Accessories</label>
						</span>
						<span>
							<input type='radio' name='category' id='Gaming' />
							<label htmlFor='Gaming'> Gaming Console</label>
						</span>
						<span>
							<input type='radio' name='category' id='Watchs' />
							<label htmlFor='Watchs'> Watchs & Accessories</label>
						</span>
					</div>
				</div>
				<div className='flex flex-col gap-[16px]'>
					<h1 className='font-publicSans font-medium text-[16px] uppercase text-textColor'>
						price range
					</h1>
					<div className='flex flex-row gap-[2px]'>
						<input
							className='py-[8px] px-[18px] w-full text-[14px] font-publicSans border-[#E4E7E9] border-[1px] outline-none focus:outline-none'
							placeholder='Min Price'
							type='number'
							name=''
							id=''
						/>
						<input
							className='py-[8px] w-full px-[18px] font-publicSans border-[#E4E7E9] border-[1px] outline-none focus:outline-none'
							placeholder='Max Price'
							type='number'
							name=''
							id=''
						/>
					</div>
					<div className='flex flex-col gap-[2px] category'>
						<span>
							<input type='radio' name='price' id='All' checked />
							<label htmlFor='All'>All Price</label>
						</span>
						<span>
							<input type='radio' name='price' id='Under ' />
							<label htmlFor='Under'> Under N20 </label>
						</span>{' '}
						<span>
							<input type='radio' name='price' id='above N25' />
							<label htmlFor='above N25'>N25 to N100</label>
						</span>{' '}
						<span>
							<input type='radio' name='price' id='N100 to N300' />
							<label htmlFor='N100 to N300'> N100 to N300</label>
						</span>
						<span>
							<input type='radio' name='price' id='N300 to N500' />
							<label htmlFor='N300 to N500'> N300 to N500</label>
						</span>
						<span>
							<input type='radio' name='price' id='N500 to N1,000' />
							<label htmlFor='N500 to N1,000'>N500 to N1,000</label>
						</span>
						<span>
							<input type='radio' name='category' id='N1,000 to N10,000' />
							<label htmlFor='N1,000 to N10,000'> N1,000 to N10,000</label>
						</span>
					</div>
				</div>
				<div className='flex flex-col gap-[16px]'>
					<h1 className='font-publicSans font-medium text-[16px] uppercase text-textColor'>
						Popular Brand
					</h1>
					<div className='grid grid-cols-2 gap-[2px] category'>
						<span>
							<input type='checkbox' name='Apple' id='Apple' />
							<label htmlFor='Apple'>Apple</label>
						</span>
						<span>
							<input type='checkbox' name='Google' id='Google' />
							<label htmlFor='Google'>Google</label>
						</span>
						<span>
							<input type='checkbox' name='Microsoft' id='Microsoft' />
							<label htmlFor='Microsoft'>Microsoft</label>
						</span>
						<span>
							<input type='checkbox' name='Samsung' id='Samsung' />
							<label htmlFor='Samsung'>Samsung</label>
						</span>
					</div>
				</div>
			</div>
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
