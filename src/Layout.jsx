import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import SideNav from './components/Navbars/SideNav';
import TopNav from './components/Navbars/TopNav';

const Layout = () => {
	const [data, setData] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		const userInfo = () => {
			try {
				if (localStorage.getItem('user')) {
					setData(JSON.parse(localStorage.getItem('user')));
					console.log('userFound');
				} else {
					console.log('User not found');
				}
			} catch (error) {}
		};
		userInfo();
	}, []);
	return (
		<div className='flex w-full bg-bg'>
			<SideNav />
			<main className='w-full bg-bg '>
				<TopNav datda={data} />
				<div className='ml-[14.5rem] mt-[5rem] mx-[10px]'>
					<Outlet />
				</div>
			</main>
		</div>
	);
};

export default Layout;
