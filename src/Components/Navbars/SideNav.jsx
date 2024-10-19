import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GrHome } from 'react-icons/gr';
import { IoCart, IoWalletOutline } from 'react-icons/io5';
import { TiMessages } from 'react-icons/ti';
import { IoSettingsOutline, IoCloseOutline } from 'react-icons/io5';
import { CiLogout } from 'react-icons/ci';
import { PiStudent } from 'react-icons/pi';
// import { BsFillPatchCheckFill } from 'react-icons/bs';
import Vector from '../../assets/Vector.png';

const SideNav = () => {
	const [show, setshow] = useState(true);
	return (
		<div className='w-[222px] bg-white z-50  h-screen fixed  sidenav overflow-scroll'>
			<div className='relative   py-[3rem]  px-[20px]  flex flex-col gap-[13px] items-cdenter justify-center'>
				<div className=' mt-[2rem] bg-white w-full h-full overflow-scroll'>
					<ul className=' sidenav_ul flex flex-col gap-[20px] justify-center   h-full'>
						<li className=''>
							<Link to={'/'} className='active'>
								<span>
									<GrHome />
								</span>
								{/* <span></span> */}
								Home
							</Link>
						</li>

						<li>
							<Link to={'/'}>
								<span>
									<PiStudent />
								</span>
								Student
								{/* <span>Student</span> */}
							</Link>
						</li>

						<li>
							<Link to={'/market'}>
								<span>
									<IoCart />
								</span>
								Market
								{/* <span>Market</span> */}
							</Link>
						</li>

						<li>
							<Link to={'/network'}>
								<span>
									<PiStudent />
								</span>
								Network
								{/* <span>Network</span> */}
							</Link>
						</li>

						<li>
							<Link to={'/'}>
								<span>
									<IoWalletOutline />
								</span>
								Wort
								{/* <span>Wort</span> */}
							</Link>
						</li>

						<li>
							<Link to={'/'}>
								<span>
									<TiMessages />
								</span>
								Messages
								{/* <span>Messages</span> */}
							</Link>
						</li>

						<li>
							<Link to={'/'}>
								<span>
									<IoSettingsOutline />
								</span>
								Setting
								{/*<span>Setting</span> */}
							</Link>
						</li>

						<li>
							<Link to={'/'}>
								<span>
									<CiLogout />
								</span>
								Log out
								{/* <span>Log out</span> */}
							</Link>
						</li>
					</ul>
				</div>
				<div
					className={`h-[220px]  w-[211px]  absolute -bottom-[12rem]  left-1 bg-[#344054] rounded-[6px] p-[20px]   items-center justify-center ${
						show ? 'flex' : 'hidden'
					}`}>
					<div className='text-white flex flex-col gap-[15px]'>
						<div className='flex justify-center items-center '>
							<span>
								<img src={Vector} alt='vector' />
							</span>
							<span
								onClick={() => setshow(false)}
								className='absolute text-2xl right-2 top-4 cursor-pointer'>
								<IoCloseOutline />
							</span>
						</div>
						<p className='text-[12px] font-medium leading-[16px] text-center'>
							Update your profile with more details to attract connections and
							get more views to build up your network.
						</p>

						<div className='flex flex-col gap-[5px]'>
							<div className='flex flex-row justify-between items-center text-[12px]'>
								<span>60%</span>
								<span>100%</span>
							</div>
							<div className='w-full  h-[10px] bg-white rounded-[42px] relative'>
								<div className='h-full w-[106px] bg-primaryBlue rounded-[42px] '></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SideNav;
