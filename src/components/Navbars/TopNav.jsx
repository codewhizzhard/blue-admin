import { Link } from 'react-router-dom';
import { GrCircleInformation } from 'react-icons/gr';
import { AiOutlineCustomerService } from 'react-icons/ai';
import { MdWorkspacePremium } from 'react-icons/md';
import { HiOutlineStatusOnline } from 'react-icons/hi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FaRegEnvelope } from 'react-icons/fa6';
import { FiSearch } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { PiUserCircleLight } from 'react-icons/pi';
import Logo from '../../assets/white_bg_logo.svg';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { useEffect, useState } from 'react';
const TopNav = () => {
	const [dropdown, setDropDown] = useState(false);

	const [data, setData] = useState('');
	// const navigate = useNavigate();
	useEffect(() => {
		if (localStorage.getItem('user')) {
			const foundUser = JSON.parse(localStorage.getItem('user'));
			setData(foundUser.user);
		}
	}, []);

	const { surName, firstName } = data;

	return (
		<nav className=' z-50 fixed topnav  bg-white w-full h-[67px] py-[10px] px-[5px]  shadow-bg shadow resize-none'>
			<header className='flex flex-row items-center justify-between h-full w-full px-4'>
				<Link to={'/'}>
					<img src={Logo} alt='Logo' className='w-[82px]' />
				</Link>

				<div className='flex flex-row items-center justify-between w-full gap-[3rem]'>
					{/* Search Bar */}
					<div className='flex items-center justify-between ml-[8rem] mr-[3rem] h-[40px] bg-bg py-[10px] px-[16px] rounded-[7px] flex-grow'>
						<span className='text-mediumGray text-[14px]'>
							<FiSearch />
						</span>
						<input
							type='text'
							placeholder='Search'
							className='bg-transparent flex-grow h-full text-[14px] focus:outline-none ml-2' // Added ml-2 for spacing
						/>
					</div>

					{/* Icons & Profile */}
					<div className='flex items-center justify-end gap-[1rem]'>
						<ul className='flex flex-row gap-[16px] items-center'>
							<Link to={'/'} className='text-primaryGreen'>
								<span>
									<HiOutlineStatusOnline />
								</span>
							</Link>
							<Link to={'/'} className='text-mediumGray'>
								<span>
									<FaRegEnvelope />
								</span>
							</Link>
							<Link to={'/'} className='text-mediumGray'>
								<span>
									<IoMdNotificationsOutline />
								</span>
							</Link>
						</ul>

						{/* Profile & Dropdown */}
						<div className='flex items-center gap-2'>
							<div className='w-[35px] h-[35px] flex justify-center items-center rounded-full bg-primaryGreen'>
								<span className='text-[14px] font-Outfit font-bold text-white'>
									{data ? firstName[0] + surName[0] : 'SR'}
								</span>
							</div>
							<button
								className='font-Outfit font-medium text-[14px] text-textColor flex gap-2 items-center'
								onClick={() => setDropDown(!dropdown)}>
								{data ? `${firstName}  ${surName} ` : 'Stylish Racon'}
								{dropdown ? <FaChevronUp /> : <FaChevronDown />}
							</button>

							{/* Dropdown Menu */}
							<div className='relative'>
								<div
									className={`absolute shadow-xl z-50 rounded-[8px] flex flex-col
										 p-[10px] bg-white -right-5 w-[238px] h-[290px] transition-all justify-center items-center ${
												dropdown ? 'top-[2.2rem]' : '-top-[30rem]'
											}`}>
									<ul className='dropDown flex flex-col w-full  gap-[16px]'>
										<li>
											<Link to={'/'}>
												{' '}
												<span>
													<PiUserCircleLight />
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
													<RiDeleteBin6Line />
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
