import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from './Components/Navbars/SideNav';
import TopNav from './Components/Navbars/TopNav';

const Layout = () => {
	return (
		<div>
			<TopNav />

			<div className='flex flex-row gap-[13px]  mt-[6rem] bg-bg'>
				<SideNav />

				<main className='ml-[14.5rem] w-full bg-bg overflow-x-hidden'>
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default Layout;
