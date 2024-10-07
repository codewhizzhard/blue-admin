import { LuMessageCircle } from 'react-icons/lu';
import { AiOutlineRetweet } from 'react-icons/ai';
import { IoMdHeart, IoMdHeartDislike } from 'react-icons/io';
import { BsDownload } from 'react-icons/bs';
import { CiBookmark } from 'react-icons/ci';
const PostBox = ({
	img,
	name,
	username,
	profile_img,
	connected,
	desc,
	hashtags = [],
	time,
	comment,
	likes,
	dislike,
	bookmark,
	retweet,
	download,
	message,
	verify,
	active,
}) => {
	return (
		<div className='p-[20px] flex flex-col gap-[16px] bg-white'>
			<div className='flex justify-between items-center'>
				<div className='flex gap-[16px] items-center'>
					<div className='w-[50px] h-[50px] rounded-full bg-mediumGray relative'>
						<div className='bg-primaryGreen h-[11px] w-[11px] border border-white rounded-full right-0 bottom-1 absolute '></div>
					</div>

					<div className='flex flex-col gap-[2px]'>
						<h1 className='flex items-center justify-center gap-[16px] font-medium text-[14px] font-inter'>
							<span>{name}</span>
							<span className='flex items-center text-mediumGray justify-center gap-[16px] before:rounded-full before:w-[4px] before:h-[4px] before:bg-mediumGray before:flex'>
								{connected}
							</span>
						</h1>
						<span className='text-[12px] font-normal font-inter text-mediumGray'>
							{username}
						</span>
						<span className='text-[12px] font-normal font-inter'>{time}</span>
					</div>
				</div>
				{/* <div>:</div> */}
			</div>
			<article className='desc max-w-[711px] flex flex-col gap-[12px]'>
				<p className='text-[16px] font-inter font-normal leading-[24px] text-textColor'>
					{desc}
					{hashtags.map((hash) => (
						<span> {hash} </span>
					))}
				</p>
				{img && <img src={img} alt={desc} />}
			</article>

			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-[0.5rem]'>
					<div className='flex items-center'>
						<div className='viewers excluded w-[50px] h-[50px] border-[3px] border-white rounded-full bg-mediumGray relative'></div>
						<div className='viewers w-[50px] h-[50px] border-[3px] border-white rounded-full bg-mediumGray relative'></div>
						<div className='viewers w-[50px] h-[50px] border-[3px] border-white rounded-full bg-mediumGray relative'></div>
						<div
							className='viewers w-[50px] h-[50px] border-[3px] border-white rounded-full bg-bg relative 
                     flex justify-center items-center font-publicSans font-bold text-primaryBlue'>
							17k
						</div>
					</div>
					<span className='text-[14px] font-bold font-publicSans text-mediumGray'>
						Viewer
					</span>
				</div>
				<div className='flex items-center gap-[30px] likes'>
					<div>
						<span>
							<LuMessageCircle />
						</span>
						<span>{comment}</span>
					</div>
					<div>
						<span>
							<AiOutlineRetweet />
						</span>
						<span>{retweet}</span>
					</div>{' '}
					<div className='text-[#F4245E]'>
						<span className='text-[#F4245E]'>
							<IoMdHeart />
						</span>
						<span className='text-[#F4245E]'>{likes}</span>
					</div>{' '}
					<div>
						<span>
							<IoMdHeartDislike />
						</span>
						<span>{dislike}</span>
					</div>{' '}
					<div>
						<span>
							<BsDownload />
						</span>
						<span>{download}</span>
					</div>{' '}
					<div>
						<span>
							<CiBookmark />
						</span>
						<span>{bookmark}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostBox;
