import TopNav from '../../Components/Navbars/TopNav';
import Desktop from './Desktop';
import Mobile from './Mobile';


const Home = () => {
	return (
		<section className='w-full'>
			<div className='hidden md:block'>
				<TopNav />
				<Desktop />
			</div>
			<div className='md:hidden'>
				<Mobile />
			</div>
		</section>
	);
};

export default Home;
