import TopNav from '../../Components/Navbars/TopNav';
import Desktop from './Desktop';
import Mobile from './Mobile';


const Home = () => {
	return (
		<section className='w-full'>
			<div className='lg:flex'>
				<TopNav />
				<Desktop />
			</div>
			<div className='flex lg:hidden'>
				<Mobile />
			</div>
		</section>
	);
};

export default Home;
