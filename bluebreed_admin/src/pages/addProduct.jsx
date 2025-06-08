import React from 'react'
import { FiX } from 'react-icons/fi'

const AddProduct = () => {
  return (
    <div className='flex w-full h-full mb-4'>
        <form className='flex-grow'>ee</form>
        <div className='w-[30%] space-y-3'>
            <div className='flex flex-col space-y-4 bg-white rounded-[6px] p-5'>
                <h3 className='text-[16px] font-bold text-[#131523]'>Category</h3>
                <div className='flex text-[#131523] text-[16px] gap-3 items-center'>
                    <input type="checkbox" className='w-5 h-5 pt-1 border border-[#D7DBEC] rounded outline-none'/>
                    <label htmlFor="" className=''>Clothing</label>
                </div>
                <span className='text-[#E6B566] text-[16px] font-semibold'>Add a New Category</span>
            </div>
            <div className='flex flex-col space-y-4 bg-white rounded-[6px] p-5'>
                <h3 className='text-[16px] font-bold text-[#131523]'>Tags</h3>
                <div className=' text-[#131523] text-[16px] gap-2 '>
                    <label htmlFor="">Add Tags</label>
                    <input type="text" className='w-full h-10 border border-[#D7DBEC] rounded text-[14px] px-2 outline-none mt-1' placeholder='Add Fabric Type, Style, or Material'/>
                </div>
                <div className='flex-wrap flex gap-2'>
                    <span className='py-1 px-3 rounded flex items-center bg-[#E6E9F4] w-fit gap-2 text-[#5A607F] text-[14px]'>nothing <FiX className='h-full pt-1'/></span>
                 {/*    <span className=' p-3 rounded flex items-center bg-red-700 w-fit gap-2'>ADD FFFF GGG GGG GGGGG GGGG GGGG GGGG GGGG GGG<FiX className='h-full pt-1 w-full'/></span> */}
                </div>
            </div>

            <div className='flex flex-col space-y-4 bg-white rounded-[6px] p-5'>
                <h3 className='text-[16px] font-bold text-[#131523]'>SEO SETTING</h3>
                <div className=' text-[#131523] text-[16px]'>
                    <label htmlFor="">Title</label>
                    <input type="text" className='w-full h-10 border border-[#D7DBEC] rounded text-[14px] px-2 outline-none mt-1' />
                </div>
                <div className=' text-[#131523] text-[16px]'>
                    <label htmlFor="">Description</label>
                    <textarea type="text" className='w-full h-10 border border-[#D7DBEC] rounded text-[14px] px-2 outline-none mt-1 resize-none' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddProduct