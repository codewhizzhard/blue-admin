import React from 'react'

const Password = () => {
  return (
    <form  className='rounded-[17px] border border-[#E1ECE3] p-4 space-y-2'>
      <div className='flex flex-col space-y-2'>
          <label htmlFor="old" className='text-[16px] font-medium'>Old Password</label>
          <input type="password" className='rounded-[8px] border border-[#DFE8E1] text-[#777777] text-[14px] font-light p-3 outline-none' placeholder='John Doe' id='old'/>
      </div>
      <div className='flex flex-col space-y-2'>
          <label htmlFor="new" className='text-[16px] font-medium'>New Password</label>
          <input type="password" className='rounded-[8px] border border-[#DFE8E1] text-[#777777] text-[14px] font-light p-3 outline-none' placeholder='John Doe' id='new'/>
      </div>
      <div className='flex flex-col space-y-2'>
          <label htmlFor="repeat" className='text-[16px] font-medium'>Repeat Password</label>
          <input type="password" className='rounded-[8px] border border-[#DFE8E1] text-[#777777] text-[14px] font-light p-3 outline-none' placeholder='John Doe' id='repeat'/>
      </div>
    </form>
  )
}

export default Password