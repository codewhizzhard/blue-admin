import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from './Components/Navbars/SideNav';
import TopNav from './Components/Navbars/TopNav';

const Layout = () => {
	return (
		<div className='w-full '>
			<div className='flex w-full bg-bg'>
				<SideNav />
				<main className='w-full bg-bg '>
					<TopNav />
					<div className='ml-[14.5rem] mt-[5rem] mx-[10px]'>
						<Outlet />
					</div>
				</main>
			</div>
		</div>
	);
};

export default Layout;
