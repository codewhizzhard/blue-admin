import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineArticle } from 'react-icons/md';
import { MdSlowMotionVideo } from 'react-icons/md';
import { FaLink } from 'react-icons/fa';
import { HiOutlinePhoto } from 'react-icons/hi2';
import { IoTimeOutline } from 'react-icons/io5';
import Hero from '../../assets/image 33.jpg';
import PostBox from '../../Components/PostBox';
import post1 from '../../assets/post1.png';
import productImg from '../../assets/product.png';
import product from '../../assets/product02.png';
import { BsCart2 } from 'react-icons/bs';
import axios from 'axios';
import Loader from '../../utils/Loader';
const Desktop = () => {
	const [data, setData] = useState();
	const [post, setPost] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	// pulling the connections
	useEffect(() => {
		if (localStorage.getItem('user')) {
			const foundUser = JSON.parse(localStorage.getItem('user'));
			setData(foundUser.user);
		}
	}, []);

	return (
		<section className='w-full'>
			<div className=' flex flex-row gap-[12px] w-full  rounded-[20px]  '>
				<div className=' flex flex-col gap-[17px] w-full  '>
					<div className='flex flex-row justify-between  w-full rounded-t-[20px] bg-gradient-to-r overflow-clip from-primaryBlue to-[#55AAE1] h-[164px]'>
						<div className=' p-[16px] w-full '>
							<article className='flex flex-col gap-[9px] text-white w-full '>
								<h1 className='font-sora font-semibold text-[18px]'>
									Discover essential skills for career success and readiness.
								</h1>
								<p className='text-[12px]'>
									Gain Valuable Insights, Stay Updated on Trends, and Connect
									with Others to Enhance Your Journey
								</p>
								<button
									className='bg-white text-primaryBlue
								 w-[91px] h-[36px] py-[8px] px-[16px] rounded-[116px]
								 flex justify-center items-center font-inter font-medium text-[14px]  '>
									Discover
								</button>
							</article>
						</div>

						<div className='w-[177px] h-[164px] mr-3'>
							<img
								src={Hero}
								alt='Hero image'
								className='w-full h-full object-fill'
							/>
						</div>
					</div>

					<div className='bg-white h-[136px] w-full p-[20px] flex flex-row  gap-[12px]'>
						<div className='w-[52px] h-[50px] rounded-full bg-mediumGray'></div>
						<div className='w-full  flex flex-col gap-[12px]'>
							<div className='w-full flex gap-[12px] items-center'>
								<input
									type='text'
									className='w-full  bg-bg h-[41px] p-[12px] rounded-[7px] capitalize text-[14px] font-normal font-inter focus:outline-none text-mediumGray'
									placeholder='whats on your mind...'
								/>
								<button className='py-[8px] px-[16px] rounded-[6px] bg-primaryBlue   w-[fit-content] h-[41px] text-[15px] font-inter font-medium text-white'>
									Post
								</button>
							</div>
							<div className='items-end'>
								<ul className='flex flex-row justify-end items-end gap-[16px] post_ul'>
									<li className='active'>
										<Link to={'/'}>
											<span>
												<MdOutlineArticle />
											</span>
											<span>All</span>
										</Link>
									</li>
									<li className='hidden'>
										<Link to={'/'}>
											<span>
												<MdOutlineArticle />
											</span>
											<span>Article</span>
										</Link>
									</li>
									<li>
										<Link to={'/'}>
											<span className='text-primaryBlue'>
												<MdSlowMotionVideo />
											</span>
											<span>Video</span>
										</Link>
									</li>
									<li>
										<Link to={'/'}>
											<span className='text-[#E0CE2C]'>
												<FaLink />
											</span>
											<span>Link</span>
										</Link>
									</li>
									<li>
										<Link to={'/'}>
											<span className='text-[#A82525]'>
												<HiOutlinePhoto />
											</span>
											<span>Photos</span>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className='flex flex-col gap-[12px]'>
						<PostBox />
					</div>
				</div>
				<div className='bg-bg max-w-[366px] w-full h-full   rounded-[20px] flex flex-col gap-[17px] '>
					<div className='grid grid-cols-2 gap-[16px]'>
						<div className='py-[12px] px-[14px] bg-white  rounded-[20px] flex gap-[4px] flex-col justify-center '>
							<h1 className='font-sora font-semibold text-[20px] text-primaryBlue'>
								{data?.connected.length}
							</h1>
							<p>
								<span className='font-inter text-[14px] font-medium text-textColor'>
									Connected
								</span>
								<span className='flex items-center gap-[4px] text-[9px] text-mediumGray'>
									<span>
										<IoTimeOutline />
									</span>
									<span>7 / 08 / 2024</span>
								</span>
							</p>
						</div>
						<div className='py-[12px] px-[14px] bg-white  rounded-[20px] flex gap-[4px] flex-col justify-center '>
							<h1 className='font-sora font-semibold text-[20px] text-primaryBlue'>
								{data?.connections.length}
							</h1>
							<p>
								<span className='font-inter text-[14px] font-medium text-textColor'>
									Connections
								</span>
								<span className='flex items-center gap-[4px] text-[9px] text-mediumGray'>
									<span>
										<IoTimeOutline />
									</span>
									<span>7 / 08 / 2024</span>
								</span>
							</p>
						</div>
					</div>

					<div className='flex flex-col gap-[17px] bg-white p-[16px] rounded-[16px]'>
						<header className='flex justify-between items-center gap-[8px]'>
							<div className='flex flex-col justify-center gap-[4px]'>
								<h1 className='font-sora font-semibold text-[16px]'>
									You might like
								</h1>
								<p className='font-sora font-medium text-[12px]'>
									Add Recommendation
								</p>
							</div>
							<button className='py-[8px]  px-[16px] bg-white border border-primaryBlue rounded-[56px] text-primaryBlue font-medium font-inter text-[14px]'>
								View All
							</button>
						</header>
						<div className='flex flex-col gap-[17px]'>
							<div className=''>
								<div className='flex justify-between items-center '>
									<div className='flex items-center gap-[4px]'>
										<div className='w-[48px] h-[48px] rounded-full bg-mediumGray relative'></div>
										<h1 className='flex flex-col '>
											<span className='font-medium text-[13px] font-inter text-textColor'>
												Aminat Abdulsalam
											</span>
											<span className='font-normal text-[12px] font-inter text-mediumGray'>
												@aminasalam
											</span>
										</h1>
									</div>
									<button className='py-[8px] px-[16px] w-[93px] h-[36px] bg-white border border-primaryBlue rounded-[56px] text-primaryBlue font-medium font-inter text-[14px]'>
										Connect
									</button>
								</div>
							</div>
							<div className=' '>
								<div className='flex justify-between items-center '>
									<div className='flex items-center gap-[4px]'>
										<div className='w-[48px] h-[48px] rounded-full bg-mediumGray relative'></div>
										<h1 className='flex flex-col '>
											<span className='font-medium text-[14px] font-inter text-textColor'>
												Micheal James
											</span>
											<span className='font-normal text-[12px] font-inter text-mediumGray'>
												@michealjames
											</span>
										</h1>
									</div>
									<button className='py-[8px] px-[16px] w-[93px] h-[36px] bg-white border border-primaryBlue rounded-[56px] text-primaryBlue font-medium font-inter text-[14px]'>
										Connect
									</button>
								</div>
							</div>
							<div className=' '>
								<div className='flex justify-between items-center '>
									<div className='flex items-center gap-[4px]'>
										<div className='w-[48px] h-[48px] rounded-full bg-mediumGray relative'></div>
										<h1 className='flex flex-col '>
											<span className='font-medium text-[14px] font-inter text-textColor'>
												Esther Isreal
											</span>
											<span className='font-normal text-[12px] font-inter text-mediumGray'>
												@estherisreal
											</span>
										</h1>
									</div>
									<button className='py-[8px] px-[16px] w-[93px] h-[36px] bg-white border border-primaryBlue rounded-[56px] text-primaryBlue font-medium font-inter text-[14px]'>
										Connect
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className='bg-white p-[16px] rounded-[16px] flex flex-col gap-[17px]'>
						<header className='flex justify-between items-center gap-[8px]'>
							<div className='flex flex-col justify-center gap-[4px]'>
								<h1 className='font-sora font-semibold text-[16px]'>
									What’s happening
								</h1>
								<p className='font-sora font-medium text-[12px]'>
									Stay informed daily.
								</p>
							</div>
							<button className='py-[8px]  px-[16px] bg-white border border-primaryBlue rounded-[56px] text-primaryBlue font-medium font-inter text-[14px]'>
								View All
							</button>
						</header>
						<div className='flex flex-col gap-[17px]'>
							<div className=' after:w-full after:h-[1px] after:bg-bg after:block after:mt-[14px]'>
								<div className='flex flex-row gap-[8px]'>
									<div>
										<div className='w-[71px] h-[69px] rounded-[12px] bg-mediumGray relative'></div>
									</div>
									<div className='flex flex-col gap-[1px]'>
										<span className='font-inter font-medium text-[12px] text-mediumGray'>
											19 August. 2024 19:45{' '}
										</span>
										<p className='font-inter font-medium text-[12px] leading-[16px]'>
											Highlights from Recent School Events and Activities
										</p>
										<p className='flex items-center text-mediumGray  gap-[10px] font-medium text-[10px] font-inter'>
											<span>Kwara state</span>
											<span className='flex items-center  justify-center gap-[16px] before:rounded-full before:w-[4px] before:h-[4px] before:bg-mediumGray before:flex'>
												University of Ilorin
											</span>
										</p>

										<p className='mt-[0.5rem] text-[9px] font-inter font-normal flex gap-[9px]'>
											<span>Trending with</span>
											<span className='text-primaryBlue'>#ilorin</span>
										</p>
									</div>
								</div>
							</div>
							<div className=' after:w-full after:h-[1px] after:bg-bg after:block after:mt-[14px]'>
								<div className='flex flex-row gap-[8px]'>
									<div>
										<div className='w-[71px] h-[69px] rounded-[12px] bg-mediumGray relative'></div>
									</div>
									<div className='flex flex-col gap-[1px]'>
										<span className='font-inter font-medium text-[12px] text-mediumGray'>
											19 August. 2024 19:45{' '}
										</span>
										<p className='font-inter font-medium text-[12px] leading-[16px]'>
											Highlights from Recent School Events and Activities
										</p>
										<p className='flex items-center text-mediumGray  gap-[10px] font-medium text-[10px] font-inter'>
											<span>Kwara state</span>
											<span className='flex items-center  justify-center gap-[16px] before:rounded-full before:w-[4px] before:h-[4px] before:bg-mediumGray before:flex'>
												University of Ilorin
											</span>
										</p>

										<p className='mt-[0.5rem] text-[9px] font-inter font-normal flex gap-[9px]'>
											<span>Trending with</span>
											<span className='text-primaryBlue'>#ilorin</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div
						className='flex flex-col items-center justify-center
					 bg-white rounded-[6px] p-[32px] gap-[22px]'>
						<img src={productImg} alt='product' />
						<div className='flex flex-col items-center  gap-[11px]'>
							<img src={product} alt='product' />
							<h1 className='flex flex-col  items-center justify-center text-textColor text-[21.5px] font-inter font-semibold'>
								<span>Heavy on Features.</span>
								<span>Light on Price.</span>
							</h1>
							<p className='flex gap-[12px] items-center'>
								<span className='text-mediumGray font-normal font-publicSans text-[14px]'>
									Only for:
								</span>{' '}
								<Link className='bg-[#FD5151] py-[6px] px-[12px] rounded-[3px] text-white font-semibold font-publicSans text-[16px]'>
									N29k Naira
								</Link>
							</p>
							<button className='w-full flex p-[24px] rounded-[2px] items-center justify-center gap-[8px] bg-primaryBlue text-white h-[48px] uppercase '>
								<BsCart2 />
								<span className='font-bold '>Add To Cart</span>
							</button>
							<button className='w-full flex p-[24px] rounded-[2px] items-center justify-center gap-[8px] font-bold  border border-mediumGray border-dotted text-primaryBlue h-[48px] text-[14px] uppercase  '>
								View Details
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Desktop;
