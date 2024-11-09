import { LuMessageCircle } from 'react-icons/lu';
import { AiOutlineRetweet } from 'react-icons/ai';
import { IoMdHeart, IoMdHeartDislike } from 'react-icons/io';
import { BsDownload } from 'react-icons/bs';
import { CiBookmark } from 'react-icons/ci';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import Loader from '../../utils/Loader';
import axios from 'axios';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { toast, ToastContainer } from 'react-toastify';
const PostBox = () => {
	const { user, dispatch } = useAuthContext();
	const [post, setPost] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const url =
		'https://back-end-slwn.onrender.com/api/v1/user/post/general/all-post';
	const localUser = JSON.parse(localStorage.getItem('user'));
	const token = localUser.user?.token;

	dayjs.extend(relativeTime);

	const config = {
		headers: { Authorization: `Bearer ${token}` },
	};
	useEffect(() => {
		try {
			axios
				.get(url, config)
				.then((res) => {
					// setLoading(true);
					setPost(res.data.posts);
					setLoading(false);
				})
				.catch((err) => {
					setError(err.message);
					setLoading(false);
				});
		} catch (err) {
			setError(err);
			setLoading(false);
		}
	}, []);
	toast.error(error, {
		position: 'top-right',
	});
	// console.log(error);
	console.log(post);
	return (
		<>
			{error ? `${error}` : null}
			{loading ? (
				<Loader />
			) : (
				post.map((post) => {
					console.log(post.poster.moreAboutUser?.profilePicture);
					return (
						<div className='p-[20px] flex flex-col gap-[16px] bg-white'>
							<div className='flex justify-between items-center'>
								<div className='flex gap-[16px] items-center'>
									<div className='w-[50px] h-[50px] rounded-full bg-mediumGray relative flex justify-center items-center'>
										{
											// <img
											// 	src={imgFun(post.poster.moreAboutUser?.profilePicture)}
											// />
											<img
												src={`data:image/jpg;base64,${post.poster.moreAboutUser?.profilePicture}`}
												alt='Fetched from server'
												// height={300}
												// width={400}
												className='w-full h-full object-cover rounded-full '
											/>
										}
										<div className='bg-primaryGreen h-[11px] w-[11px] border border-white rounded-full right-0 bottom-1 absolute '></div>
									</div>
									{/* <img src={`data:image/png;base64,${this.state.image}`} />: '' */}
									<div className='flex flex-col gap-[2px]'>
										<h1 className='flex items-center justify-center gap-[16px] font-medium text-[14px] font-inter'>
											<span> {post.poster.moreAboutUser?.userName}</span>

											<span className='flex items-center text-mediumGray justify-center gap-[8px] '>
												<span className='before:rounded-full before:w-[4px] before:h-[4px] before:bg-mediumGray before:flex'></span>
												{/* {post?.connected && post?.connected == true
													? 'connected'
													: 'connect'} */}
											</span>
										</h1>
										<span className='text-[12px] font-normal font-inter text-mediumGray'>
											{post.poster.moreAboutUser?.userName}
										</span>
										<span className='text-[8px] font-normal font-inter text-textColor'>
											{dayjs(post.datePosted).fromNow()}
										</span>
									</div>
								</div>
							</div>
							<article className='desc max-sw-[711px] flex flex-col gap-[12px]'>
								<p className='text-[14px] font-inter font-normal leading-[24px] text-textColor'>
									{post?.postBodyText}
									{/* {hashtags.map((hash) => (
									<span> {hash} </span>
								))} */}
								</p>
								{/* {img && <img src={img} alt={desc} />} */}
							</article>

							<div className='flex items-center justify-between'>
								<div className='flex items-center gap-[0.5rem]'>
									<div className='flex items-center'>
										<div className='viewers excluded w-[27.66px] h-[27.66px] border-[3px] border-white rounded-full bg-mediumGray relative'></div>
										<div className='viewers w-[27.66px] h-[27.66px] border-[3px] border-white rounded-full bg-mediumGray relative'></div>
										<div className='viewers w-[27.66px] h-[27.66px] border-[3px] border-white rounded-full bg-mediumGray relative'></div>
										<div
											className='viewers w-[27.66px] h-[27.66px] border-[3px] border-white rounded-full bg-bg relative
		             flex justify-center text-[10px] items-center font-publicSans font-bold text-primaryBlue'>
											<span> {post?.postViews.length} </span>
										</div>
									</div>
									<span className='text-[10px] font-bold font-publicSans text-mediumGray'>
										Viewer
									</span>
								</div>
								<div className='flex items-center gap-[30px] likes '>
									<div>
										<span>
											<LuMessageCircle />
										</span>
										<span>{post?.postComments.length}</span>
									</div>
									<div className='text-[#F4245E]'>
										<span className='text-[#F4245E]'>
											<IoMdHeart />
										</span>
										<span className='text-[#F4245E]'>
											{post?.postLikes.length}
										</span>
									</div>{' '}
									<div>
										<span>
											<IoMdHeartDislike />
										</span>
										<span> {post?.dislikes.length} </span>
									</div>{' '}
								</div>
							</div>
						</div>
					);
				})
			)}

			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				closeOnClick
				pauseOnHover
				draggable
				theme='dark'
			/>
		</>
	);
};

export default PostBox;
