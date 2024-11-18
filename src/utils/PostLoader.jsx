import './Loader.css';
import { ClipLoader, MoonLoader } from 'react-spinners';

const PostLoader = () => {
	return (
		<div className='post-overlay '>
			<div className='spinner'>
				<MoonLoader color='#0258FF' size={50} />
			</div>
		</div>
	);
};

export default PostLoader;
