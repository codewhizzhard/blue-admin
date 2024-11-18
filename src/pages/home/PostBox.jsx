import { LuMessageCircle } from 'react-icons/lu';
import { AiOutlineRetweet } from 'react-icons/ai';
import { IoMdHeart, IoMdHeartDislike } from 'react-icons/io';
import { BsDownload } from 'react-icons/bs';
import { CiBookmark } from 'react-icons/ci';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import PostLoader from '../../utils/PostLoader';

import axios from 'axios';
import dayjs from 'dayjs';
import img from '../../assets/cover.png';
import relativeTime from 'dayjs/plugin/relativeTime';
import { toast, ToastContainer } from 'react-toastify';
const PostBox = () => {
	const { user, dispatch } = useAuthContext();
	const [post, setPost] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const url =
		'https://back-end-slwn.onrender.com/api/v1/user/post/general/all-post';
	const likeUrl =
		'https://back-end-slwn.onrender.com/api/v1/user/post/general/like-post';

	const disLikeUrl =
		'https://back-end-slwn.onrender.com/api/v1/user/post/general/dislike-post';

	const localUser = JSON.parse(localStorage.getItem('user'));
	const token = localUser.user?.token;
	const userId = localUser.user?._id;
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
	const like = async (id) => {
		await axios
			.post(
				likeUrl,
				{
					postId: id,
				},
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
				}
			)
			.then((res) => {
				console.log(res);
				console.log(res.data);
				const newPost = post.map((item) => {
					if (item._id == res._id) {
						return res.data;
					} else {
						return item;
					}
				});

				setPost(newPost);
			})
			.catch((error) => {
				console.error(
					'There was a problem with the request:',
					error.response.data.message
				);
			});
	};

	const disLike = async (id) => {
		// useEffect(() => {
		await axios
			.post(
				disLikeUrl,
				{
					postId: id,
				},
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
				}
			)
			.then((res) => {
				// Update the post state only after the request is successful
				console.log(res.data.postDisLiked);
				const newPosts = post.map((item) => {
					console.log(item._id);
					if (item._id === res.data.postDisLiked) {
						return res.data; // Replace the disliked post with the updated data from the server
					} else {
						return item;
					}
				});

				setPost(newPosts);
				console.log(res.data); // Log the response data
			})
			.catch((error) => {
				console.error(
					'There was a problem with the request:',
					error.response?.data?.message || error.message
				);
			})
			.catch((error) => {
				console.error(
					'There was a problem with the request:',
					error.response.data.message
				);
			});
		// }, [post]);
	};
	console.log(post);
	return (
		<>
			{error ? `${error}` : null}
			{loading ? (
				<PostLoader />
			) : (
				post.map((post) => {
					// console.log(post?.dislikes.length);
					return (
						<div className='p-[20px] flex flex-col gap-[16px] bg-white'>
							<div className='flex justify-between items-center'>
								<div className='flex gap-[16px] items-center'>
									<div className='w-[50px] h-[50px] rounded-full bg-mediumGray relative flex justify-center items-center'>
										{
											<img
												src={`data:image/jpg;base64,${
													post.poster.moreAboutUser?.profilePicture
														? post.poster.moreAboutUser?.profilePicture
														: img
												}`}
												alt='Img'
												className='w-full h-full object-cover rounded-full '
											/>
										}
										<div className='bg-primaryGreen h-[11px] w-[11px] border border-white rounded-full right-0 bottom-1 absolute '></div>
									</div>
									{/* <img src={`data:image/png;base64,${this.state.image}`} />: '' */}
									<div className='flex flex-col gap-[2px]'>
										<h1 className='flex items-center justify-center gap-[16px] font-medium text-[14px] font-inter'>
											<span> {post.poster.moreAboutUser?.userName}</span>

											{userId === post.poster._id ? null : post?.connected ===
											  true ? (
												<button
													type='button'
													className='flex items-center text-mediumGray justify-center gap-[8px] '>
													<span className='before:rounded-full before:w-[4px] before:h-[4px] before:bg-mediumGray before:flex'></span>
													connected
												</button>
											) : (
												<button
													type='button'
													className='flex items-center text-mediumGray justify-center gap-[8px] '>
													<span className='before:rounded-full before:w-[4px] before:h-[4px] before:bg-mediumGray before:flex'></span>
													connect
												</button>
											)}
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
									<button type='button'>
										<span>
											<LuMessageCircle />
										</span>
										<span>{post?.postComments.length}</span>
									</button>
									<button
										type='button'
										className='text-[#F4245E]'
										onClick={() => like(post?._id)}>
										<span className='text-[#F4245E]'>
											<IoMdHeart />
										</span>
										<span className='text-[#F4245E]'>
											{post?.postLikes.length}
										</span>
									</button>{' '}
									<button type='button' onClick={() => disLike(post?._id)}>
										<span>
											<IoMdHeartDislike />
										</span>
										<span> {post?.postDisLikes.length} </span>
									</button>{' '}
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
