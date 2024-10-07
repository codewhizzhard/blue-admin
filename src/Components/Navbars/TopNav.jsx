import { Link } from 'react-router-dom';
import { GrCircleInformation } from 'react-icons/gr';
import { AiOutlineCustomerService } from 'react-icons/ai';
import { MdWorkspacePremium } from 'react-icons/md';
import { HiOutlineStatusOnline } from 'react-icons/hi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FaRegEnvelope } from 'react-icons/fa6';
import { FiSearch } from 'react-icons/fi';
import Logo from '../../assets/white_bg_logo.svg';

import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';

const TopNav = () => {
	const [dropdown, setDropDown] = useState(false);
	return (
		<nav className=' z-50 fixed topnav  bg-white w-full h-[67px] py-[10px] px-[20px]  shadow-bg shadow'>
			<header className='flex flex-row items-center justify-between  gap-[3rem] h-full w-full'>
				<Link to={'/home'}>
					<img src={Logo} alt='Logo' className='w-[82px]' />
				</Link>
				<div className='q3 flex flex-row items-center justify-between  gap-[3rem] w-full'>
					<div className='flex flex-row items-center justify-center ml-[5.2rem] text-mediumGray gap-[8px] max-w-[750px]  w-full h-[40px] bg-bg py-[10px] px-[16px] rounded-[7px] '>
						<span className='text-[14px]'>
							<FiSearch />
						</span>
						<input
							type='text'
							placeholder='Search'
							className='bg-transparent  w-full h-full text-[14px] focus:outline-none'
						/>
					</div>
					<div className='flex flex-row gap-[3rem] items-center justify-between ws-full'>
						<ul className='flex flex-row gap-[16px] items-center'>
							<Link to={'/'} className='text-primaryGreen'>
								{' '}
								<span>
									<HiOutlineStatusOnline />
								</span>{' '}
							</Link>
							<Link to={'/'} className='text-mediumGray'>
								{' '}
								<span>
									<FaRegEnvelope />
								</span>{' '}
							</Link>
							<Link to={'/'} className='text-mediumGray'>
								{' '}
								<span>
									<IoMdNotificationsOutline />
								</span>{' '}
							</Link>
						</ul>
						<div className='flex flex-row gap-2 items-center'>
							<div className='w-[40px] h-[40px] flex justify-center items-center rounded-full bg-primaryGreen'>
								<span className='text-xl font-bold text-white'>SR</span>
							</div>
							<div className='relative'>
								<button
									className='font-inter font-medium text-[14px] flex gap-2 items-center'
									onClick={() => setDropDown(!dropdown)}>
									Stylish Racon
									{dropdown ? <FaChevronUp /> : <FaChevronDown />}
								</button>
								<div
									className={`absolute  shadow-xl z-50 rounded-[8px] flex flex-col justify-center items-center
									 p-[10px] bg-white right-[0rem]
									   w-[238px] h-[290px] transition-all ${
												dropdown
													? 'top-[3rem] transition-all'
													: '-top-[30rem] transition-all'
											} `}>
									<ul className='dropDown flex flex-col w-full  gap-[16px]'>
										<li>
											<Link to={'/'}>
												{' '}
												<span>
													<GrCircleInformation />
												</span>
												<span>My Profile</span>{' '}
											</Link>
										</li>
										<li>
											<Link to={'/'}>
												{' '}
												<span>
													<GrCircleInformation />
												</span>
												<span>About</span>{' '}
											</Link>
										</li>
										<li>
											<Link to={'/'}>
												{' '}
												<span>
													<AiOutlineCustomerService />
												</span>
												<span>Customer support</span>{' '}
											</Link>
										</li>
										<li>
											<Link to={'/'}>
												{' '}
												<span>
													<MdWorkspacePremium />
												</span>
												<span>Premium</span>{' '}
											</Link>
										</li>
										<li>
											<Link to={'/'}>
												{' '}
												<span>
													<MdWorkspacePremium />
												</span>
												<span>Survey</span>{' '}
											</Link>
										</li>
										<li>
											<Link to={'/'}>
												{' '}
												<span>
													<MdWorkspacePremium />
												</span>
												<span>LogOut</span>{' '}
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</nav>
	);
};

export default TopNav;
