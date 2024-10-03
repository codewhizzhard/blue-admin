import React from 'react';
import { Link } from 'react-router-dom';
import { GrHome } from 'react-icons/gr';
import { IoCart, IoWalletOutline } from 'react-icons/io5';
import { TiMessages } from 'react-icons/ti';
import { IoSettingsOutline, IoCloseOutline } from 'react-icons/io5';
import { CiLogout } from 'react-icons/ci';
import { PiStudent } from 'react-icons/pi';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import Vector from '../../assets/Vector.png';

const SideNav = () => {
	return (
		<div className='w-[211px]  h-screen fixed '>
			<div className='flex flex-col gap-[13px] items-center justify-center'>
				<div className='bg-white p-8 w-full h-[199px] flex flex-col  items-center justify-center gap-[13px] rounded-[8px]'>
					<div className='flex flex-col justify-center items-center gap-[13px] '>
						<div className='w-[50px] h-[50px] rounded-full bg-mediumGray'></div>
						<div className='flex flex-col justify-center items-center'>
							<h1 className='text-textColor text-[16px] font-inter font-semibold'>
								Unknown User
							</h1>
							<span className='text-[12px] font-inter font-normal text-mediumGray'>
								@--
							</span>
						</div>
						<button className='bg-primaryBlue text-[16px] font-medium font-inter text-white w-full max-w-[176px] h-[36px] rounded-[6px] py-[8px] px-[16px]'>
							View Profile{' '}
						</button>
					</div>
				</div>
				<div className='py-[8px]  px-[16px] rounded-[20px] bg-white w-full h-[460px]'>
					<ul className=' sidenav_ul flex flex-col gap-[20px] justify-center pl-[20px] h-full'>
						<li>
							<Link to={'/'}>
								<span>
									<GrHome />
								</span>
								<span>Home</span>
							</Link>
						</li>

						<li>
							<Link to={'/'}>
								<span>
									<PiStudent />
								</span>
								<span>Student</span>
							</Link>
						</li>

						<li>
							<Link to={'/'}>
								<span>
									<IoCart />
								</span>
								<span>Market</span>
							</Link>
						</li>

						<li>
							<Link to={'/'}>
								<span>
									<PiStudent />
								</span>
								<span>Network</span>
							</Link>
						</li>

						<li>
							<Link to={'/'}>
								<span>
									<IoWalletOutline />
								</span>
								<span>Wort</span>
							</Link>
						</li>

						<li>
							<Link to={'/'}>
								<span>
									<TiMessages />
								</span>
								<span>Messages</span>
							</Link>
						</li>

						<li>
							<Link to={'/'}>
								<span>
									<IoSettingsOutline />
								</span>
								<span>Setting</span>
							</Link>
						</li>

						<li>
							<Link to={'/'}>
								<span>
									<CiLogout />
								</span>
								<span>Log out</span>
							</Link>
						</li>
					</ul>
				</div>
				<div className='h-[220px] w-full relative bg-primaryBlue rounded-[20px] p-[20px]'>
					<div className='text-white flex flex-col gap-[20px]'>
						<div className='flex justify-center items-center '>
							<span>
								<img src={Vector} alt='vector' />
							</span>
							<span className='absolute text-2xl right-2 top-4 cursor-pointer'>
								<IoCloseOutline />
							</span>
						</div>
						<p className='text-[12px] leading-[16px]'>
							Update your profile with more details to attract connections and
							get more views to build up your network.
						</p>

						<div>
							<div className='flex flex-row justify-between items-center text-[12px]'>
								<span>60%</span>
								<span>100%</span>
							</div>
							<div className='w-[171px] h-[10px] bg-white rounded-[42px] relative'>
								<div className='h-full w-[106px] bg-[#41D4A8] rounded-[42px] '></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SideNav;
