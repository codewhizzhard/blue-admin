import React, { useState } from 'react'
import { FiX } from 'react-icons/fi'

const AddProduct = () => {
    const [clickStates, setClickedStates] = useState({btn1: false, btn2: false});

    const handleClick = (btn) => {
        setClickedStates((prev) => ({
            ...prev,
            [btn]: !prev[btn]
        }))
    }
  return (
    <div className='flex w-full h-full mb-4 space-x-3 '>
        <form className='flex-grow p-5 bg-white rounded-[6px] mb-4 space-y-4'>
            <h3 className='text-[16px]'>Information</h3>
            <div className='space-y-1 flex flex-col'>
                <label htmlFor="" className='text-[14px] text-[#5A607F]'>Product Name</label>
                <input type="text" className='w-full py-2 px-4 rounded text-[#A1A7C4] text-[16px] border border-[#D9E1EC] outline-none' placeholder='e.g., Dress, Sofa, Curtain'/>
            </div>
            <div className='space-y-1 flex flex-col'>
                <label htmlFor="" className='text-[14px] text-[#5A607F]'>Product Description</label>
                <textarea type="text" className='w-full h-24 pt-1 px-4 rounded text-[#A1A7C4] text-[16px] border border-[#D9E1EC] outline-none resize-none' placeholder='Describe the design, fabric, or material details'/>
            </div>
            <div className='space-y-1 flex flex-col'>
                <label htmlFor="" className='text-[14px] text-[#5A607F]'>Product Features</label>
                <textarea type="text" className='w-full h-24 pt-1 px-4 rounded text-[#A1A7C4] text-[16px] border border-[#D9E1EC] outline-none resize-none' placeholder='Describe the design, fabric, or material features'/>
            </div>
            <div className='space-y-1 flex flex-col'>
                <label htmlFor="" className='text-[14px] text-[#5A607F]'>How many in Stock?</label>
                <input type="text" className='w-full py-2 px-4 rounded text-[#A1A7C4] text-[16px] border border-[#D9E1EC] outline-none' placeholder='e.g., 34'/>
            </div>
            <div className='space-y-1 flex flex-col pb-4'>
                <label htmlFor="" className='text-[14px] text-[#5A607F]'>Color</label>
                <input type="text" className='w-full py-2 px-4 rounded text-[#A1A7C4] text-[16px] border border-[#D9E1EC] outline-none' placeholder='e.g., white, black, blue'/>
            </div>
            <hr className='w-full text-[#D7DBEC] '/>
            <div className='space-y-1 flex flex-col pb-4'>
                <label htmlFor="" className='text-[14px] text-[#5A607F]'>Color</label>
                <input type="text" className='w-full py-2 px-4 rounded text-[#A1A7C4] text-[16px] border border-[#D9E1EC] outline-none' placeholder='e.g., white, black, blue'/>
            </div>
            {/*  */}
            <div className='space-y-3'>
 button               <h3 className='text-[16px] text-[#131523] font-bold'>Price</h3>
                <div className='flex w-full justify-between'>
                    <div className='flex flex-col w-[47%]'>
                    <label htmlFor="" className='text-[14px] text-[#5A607F]'>Product Price</label>
                    <input type="text" className='w-full py-2 px-4 rounded text-[#A1A7C4] text-[16px] border border-[#D9E1EC] outline-none'  />
                    </div>
                    <div className='flex flex-col w-[47%]'>
                    <label htmlFor="" className='text-[14px] text-[#5A607F]'>Discount Price (if applicable)</label>
                    <input type="text" className='w-full py-2 px-4 rounded text-[#A1A7C4] text-[16px] border border-[#D9E1EC] outline-none' />
                    </div>
                </div>
                <div className='flex gap-2'>
                    <button className={`w-11 h-6 rounded-2xl relative ${clickStates.btn1 ? "bg-[#E6B566]" : "bg-[#FF89011A] "}`} onClick={() => handleClick("btn1")} type='button'><span className={`bg-white absolute w-4 h-4 rounded-xl bottom-1 ${clickStates.btn1 ? "right-1" : "left-1"} `} style={{filter: "drop-shadow(0 4px 6px rgba(38, 44, 71, 0.16))"}}></span></button>{/* shadow-[#262C4729] */}
                    <p className='text-[#131523] text-[16px]'>Include VAT or Custom Charges?</p>
                </div>
            </div>
            <hr className='w-full text-[#D7DBEC] '/>
            <div className='space-y-3'>
                <h3 className='text-[#131523] text-[16px] font-bold'>Different Options</h3>
                <div className='flex gap-2'>
                    <button className={`w-11 h-6 rounded-2xl relative ${clickStates.btn2 ? "bg-[#E6B566]" : "bg-[#FF89011A] "}`} onClick={() => handleClick("btn2")} type='button'><span className={`bg-white absolute w-4 h-4 rounded-xl bottom-1 ${clickStates.btn2 ? "right-1" : "left-1"} `} /* style={{filter: "drop-shadow(0 4px 6px rgba(38, 44, 71, 0.16))"}} */></span></button>{/* shadow-[#262C4729] */}
                    <p className='text-[#131523] text-[16px]'>Does this product have size or material variations?</p>
                </div>
            </div>

            <div className='space-y-3 pt-4'>
                <h3 className='text-[#131523] text-[16px] font-bold'>Size / Dimensions</h3>
                <div className='space-y-1 flex flex-col'>
                    <label htmlFor="" className='text-[14px] text-[#5A607F]'>Value</label>
                    <div className=' flex h-10 items-center divx-2 rounded border border-[#D9E1EC]'>
                    <div className=' flex gap-2 h-[80%]'><span className='py-1 px-3 rounded flex items-center bg-[#E6E9F4] w-fit gap-2 text-[#5A607F] text-[14px]'>SM <FiX className='h-fullpt-1 text-[#7E84A3]'/></span> <span className='py-1 px-3 rounded flex items-center bg-[#E6E9F4] w-fit gap-2 text-[#5A607F] text-[14px]'>LG <FiX className='h-fullpt-1 text-[#7E84A3]'/></span> <span className='py-1 px-3 rounded flex items-center bg-[#E6E9F4] w-fit gap-2 text-[#5A607F] text-[14px]'>MD <FiX className='h-fullpt-1 text-[#7E84A3]'/></span></div>
                    <input type="text" className='w-full px-3 text-[#A1A7C4] text-[16px] h-[80%]  outline-none' placeholder=''/></div>
                 </div>
            </div>

            <div>

            </div>
        </form>

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
                    <span className='py-1 px-3 rounded flex items-center bg-[#E6E9F4] w-fit gap-2 text-[#5A607F] text-[14px]'>nothing <FiX className='h-fullpt-1 text-[#7E84A3]'/></span>
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
                    <textarea type="text" className='w-full h-24 border border-[#D7DBEC] rounded text-[14px] px-2 outline-none mt-1 resize-none pt-1' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddProduct