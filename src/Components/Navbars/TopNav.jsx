import { Link } from 'react-router-dom';
import Logo from '../../assets/white_bg_logo.svg';
import { GrCircleInformation } from 'react-icons/gr';
import { AiOutlineCustomerService } from 'react-icons/ai';
import { MdWorkspacePremium } from 'react-icons/md';
import { HiOutlineStatusOnline } from 'react-icons/hi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FaRegEnvelope } from 'react-icons/fa6';
import { FiSearch } from 'react-icons/fi';
const TopNav = () => {
	return (
		<nav className='  fixed z-50 top-[1rem]   topnav flex flex-col items-cencter justify-center bg-white max-w-[1255px] w-full h-[67px] py-[10px] px-[20px] rounded-[30px] shadow-[14px 17px 40px 4px #7090B014]'>
			<header className='flex flex-row items-center justify-between h-ful w-full'>
				<Link to={'/'}>
					<img src={Logo} alt='Logo' />
				</Link>
				<ul className='flex flex-row items-center justify-center gap-[16px]'>
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
				</ul>
				<div className='q3 flex flex-row items-center justify-center gap-[16px]'>
					<div className='flex flex-row items-center text-mediumGray gap-[8px] max-w-[458px] h-[40px] bg-bg py-[10px] px-[16px] rounded-[60px] '>
						<span className='text-[14px]'>
							<FiSearch />
						</span>
						<input
							type='text'
							placeholder='Search'
							className='bg-transparent w-full h-full text-[14px] focus:outline-none'
						/>
					</div>
					<Link to={'/'} className='text-primaryGreen'>
						{' '}
						<span>
							<HiOutlineStatusOnline />
						</span>{' '}
					</Link>
					<Link to={'/'} className='text-mediumGray'>
						{' '}
						<span>
							<IoMdNotificationsOutline />
						</span>{' '}
					</Link>
					<Link to={'/'} className='text-mediumGray'>
						{' '}
						<span>
							<FaRegEnvelope />
						</span>{' '}
					</Link>
					<Link to={'/'}>
						{' '}
						<span></span>{' '}
					</Link>
					<div className='w-[40px] h-[40px] rounded-full bg-mediumGray'></div>
				</div>
			</header>
		</nav>
	);
};

export default TopNav;
