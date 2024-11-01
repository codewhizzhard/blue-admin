import { LuMessageCircle } from 'react-icons/lu';
import { AiOutlineRetweet } from 'react-icons/ai';
import { IoMdHeart, IoMdHeartDislike } from 'react-icons/io';
import { BsDownload } from 'react-icons/bs';
import { CiBookmark } from 'react-icons/ci';
import { useEffect, useState } from 'react';
import axios from 'axios';
const PostBox = () => {
	const [data, setData] = useState('');
	const [post, setPost] = useState([]);
	// const [id, setId] = useState('');
	const url =
		'https://back-end-slwn.onrender.com/api/v1/user/post/general/all-post';

	// pulling the connections
	const getUser = localStorage.getItem('user');
	useEffect(() => {
		if (getUser) {
			const foundUser = JSON.parse(localStorage.getItem('user'));
			return setData(foundUser.user);
		}
	}, []);
	console.log(data?.token);
	// token
	useEffect(() => {
		const token = data?.token;
		console.log(token);
		const postRequest = async () => {
			// const res = await axios
			// 	.get(url, {
			// 		headers: {
			// 			'Content-Type': 'application/json',
			// 			Authorization: `Bearer ${token}`,
			// 		},
			// 		body: JSON.stringify({ data }),
			// 	})
			// 	.then((res) => {
			// 		setPost(res.data.posts);
			// 	})
			// 	.catch((err) => {
			// 		console.log(err.message);
			// 	});
			const res = await axios
				.get(url, data, {
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
				})
				.then((data) => {
					console.log(data);
				})
				.catch((err) => {
					console.log(err);
				});
			// console.log(res.data);
		};
		postRequest();
	}, []);
	console.log(post);
	return (
		<>
			{post.map((post) => {
				// setId(post.poster._id);
				return (
					<div className='p-[20px] flex flex-col gap-[16px] bg-white'>
						<div className='flex justify-between items-center'>
							<div className='flex gap-[16px] items-center'>
								<div className='w-[50px] h-[50px] rounded-full bg-mediumGray relative'>
									<div className='bg-primaryGreen h-[11px] w-[11px] border border-white rounded-full right-0 bottom-1 absolute '></div>
								</div>

								<div className='flex flex-col gap-[2px]'>
									<h1 className='flex items-center justify-center gap-[16px] font-medium text-[14px] font-inter'>
										<span>name</span>
										<span className='flex items-center text-mediumGray justify-center gap-[16px] before:rounded-full before:w-[4px] before:h-[4px] before:bg-mediumGray before:flex'>
											connected
										</span>
									</h1>
									<span className='text-[12px] font-normal font-inter text-mediumGray'>
										username
									</span>
									<span className='text-[12px] font-normal font-inter'>
										time
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
			})}
		</>
	);
};

export default PostBox;
