import React, { useState } from 'react'
import { FiArrowLeft, FiArrowLeftCircle, FiArrowUpLeft, FiX } from 'react-icons/fi'
import { clothingCheckboxes, interiorCheckboxes } from './addProductCheckboxes';

const AddProduct = () => {
    const [clickStates, setClickedStates] = useState({btn1: false, btn2: false});
    const [inputTagState, setInputTagState] = useState({input1: "", input2: ""});
    const [tagsState, setTagsState] = useState({tag1: [], tag2: []});
    const [boxesState, setBoxesState] = useState({clothingBoxes: clothingCheckboxes, interiorBoxes: interiorCheckboxes});

    const categories = ["Clothing - Women", "Clothing - Men", "Casual Wear", "Traditional / Formal Wear", "Home Decor & Interior", "Furniture", "Bedding & Textiles", "Wall Art & Accessories", "Lighting & Fixtures"]
   /*  const clothingCheckboxes = {
        "Standard Clothing Sizes": ["XS (Extra Small)", "S (Small)", "M (Medium)", "L (Large)", "XL (Extra Large)", "XXL (2XL)", "XXXL (3XL)"],
        "Shoe Sizes (if applicable):": ["EU 36 - 46", "UK 3 - 12", "US 4 - 13"],
        "Kids Sizes (if applicable):": ["0 - 3 months, 3 - 6 months, 6 - 12 months", "1 - 2 years, 3 - 4 years, 5 - 6 years"]
    } */

    const handleClick = (btn) => {
        setClickedStates((prev) => ({
            ...prev,
            [btn]: !prev[btn]
        }))
    }

    const handleEnterTags = (e, input, tag) => {
        ///
        if ((e.key === "Enter" || e.key === ",") && inputTagState[input].trim()) {
            e.preventDefault();
            const newTag = inputTagState[input].trim().replace(/,$/, '');
            console.log("newtag", newTag)
            console.log("tagstatehandle", tagsState[tag])
            if (!tagsState[tag].includes(newTag)) {
                setTagsState((prev) => ({
                    ...prev, [tag]: [...prev[tag], newTag]
                }))
            }
             setInputTagState((prev) => (
                        { ...prev, [input]: ""}
                    ))
        }
        
    }

    

    const removeTag = (tag, index) => {
        setTagsState((prev) => ({...prev, [tag]: prev[tag].filter((_, i) => i !== index)}));
        console.log("tagstate", tagsState[tag])
    }

     console.log("tagstatesdsss", tagsState.tag2)
   

  return (
    <div className='h-full w-full'>
        {/* <div className='h-full w-full bg-red-600'>
            hhh
        </div> */}
    <div className='flex flex-col gap-2'>
        
        <div className='justify-between h-15 flex items-center'>
            <div className='max-h-full flex flex-col'>
                <p className='flex items-center text-[#5A607F]'><FiArrowLeft className='text-[#7E84A3] h-[16px] w-[20px]'/> <span className='text-[14px]'>Back</span> </p> 
                <h3 className='text-[24px] font-bold text-[#131523]'>Add Product</h3>
            </div>
            <div className='flex gap-2 max-h-full'>
                <button type='button' className='border border-[#EDEFF2] text-[16px] px-8 py-2 text-[#4A4A4A]'>Cancel</button>
                <button type='button' className='text-[16px] bg-[#E6B566] px-6 py-2 text-white rounded font-bold'>Save</button>
            </div>
        </div>
        {/* w- shouldnt change the width */}
        <div className='flex h-full mb-4 space-x-3 flex-grow'>
        <form className='flex-grow p-5 bg-white rounded-[6px] mb-4 space-y-4'>
            <h3 className='text-[16px]'>Information</h3>
            <div className='space-y-1 flex flex-col '>
                <label htmlFor="" className='text-[14px] text-[#5A607F]'>Product Name</label>
                <input type="text" className='w-full py-2 px-4 rounded text-[#A1A7C4] text-[16px] border border-[#D9E1EC] outline-none' placeholder='e.g., Dress, Sofa, Curtain'/>
            </div>
            <div className='space-y-1 flex flex-col '>
                <label htmlFor="" className='text-[14px] text-[#5A607F]'>Product Description</label>
                <textarea type="text" className='w-full h-24 pt-1 px-4 rounded text-[#A1A7C4] text-[16px] border border-[#D9E1EC] outline-none resize-none' placeholder='Describe the design, fabric, or material details'/>
            </div>
            <div className='space-y-1 flex flex-col '>
                <label htmlFor="" className='text-[14px] text-[#5A607F]'>Product Features</label>
                <textarea type="text" className='w-full h-24 pt-1 px-4 rounded text-[#A1A7C4] text-[16px] border border-[#D9E1EC] outline-none resize-none' placeholder='Describe the design, fabric, or material features'/>
            </div>
            <div className='space-y-1 flex flex-col '>
                <label htmlFor="" className='text-[14px] text-[#5A607F]'>How many in Stock?</label>
                <input type="text" className='w-full py-2 px-4 rounded text-[#A1A7C4] text-[16px] border border-[#D9E1EC] outline-none' placeholder='e.g., 34'/>
            </div>
            <div className='space-y-1 flex flex-col pb-4 '>
                <label htmlFor="" className='text-[14px] text-[#5A607F]'>Color</label>
                <input type="text" className='w-full py-2 px-4 rounded text-[#A1A7C4] text-[16px] border border-[#D9E1EC] outline-none' placeholder='e.g., white, black, blue'/>
            </div>
            <hr className='w-full text-[#D7DBEC] '/>
            <div className='space-y-1 flex flex-col pb-4 '>
                <label htmlFor="" className='text-[14px] text-[#5A607F]'>Color</label>
                <input type="file" className='w-full py-2 px-4 rounded text-[#A1A7C4] text-[16px] border border-[#D9E1EC] outline-none' placeholder='e.g., white, black, blue' />
            </div>
            {/*  */}
            <div className='space-y-3 '>
               <h3 className='text-[16px] text-[#131523] font-bold'>Price</h3>
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
                    <button className={`w-11 h-6 rounded-2xl relative ${clickStates.btn1 ? "bg-[#E6B566]" : "bg-[#FF89011A] "}`} onClick={() => handleClick("btn1")} type='button'><span className={`bg-white absolute w-4 h-4 rounded-xl bottom-1 ${clickStates.btn1 ? "right-1" : "left-1"} `} ></span></button>{/* shadow-[#262C4729] */}
                    <p className='text-[#131523] text-[16px]'>Include VAT or Custom Charges?</p>
                </div>
            </div>
            <hr className='w-full text-[#D7DBEC] '/>
            <div className='space-y-3 '>
                <h3 className='text-[#131523] text-[16px] font-bold'>Different Options</h3>
                <div className='flex gap-2'>
                    <button className={`w-11 h-6 rounded-2xl relative ${clickStates.btn2 ? "bg-[#E6B566]" : "bg-[#FF89011A] "}`} onClick={() => handleClick("btn2")} type='button'><span className={`bg-white absolute w-4 h-4 rounded-xl bottom-1 ${clickStates.btn2 ? "right-1" : "left-1"} `} ></span></button>{/* shadow-[#262C4729] */}
                    <p className='text-[#131523] text-[16px]'>Does this product have size or material variations?</p>
                </div>
            </div>

            <div className='space-y-3 pt-4 '>
                <h3 className='text-[#131523] text-[16px] font-bold'>Size / Dimensions</h3>
                <div className='space-y-1 flex flex-col'>
                    <label htmlFor="" className='text-[14px] text-[#5A607F]'>Value</label>
                    <div className=' flex h-10 items-center rounded border border-[#D9E1EC] px-2'>
                    <div className=' flex gap-2 h-[80%]'>
                        { tagsState.tag1 &&
                        tagsState.tag1.map((tag, index) => (
                            <span className='py-1 px-3 rounded flex items-center w-fit gap-2 text-[#5A607F] text-[14px] bg-[#E6E9F4]' key={index}>{tag}  <FiX className='h-fullpt-1 text-[#7E84A3]' onClick={() => removeTag("tag1", index)}/></span>
                        ))
                    }
                    </div>
                    <input type="text" className='w-full px-3 text-[#A1A7C4] text-[16px] h-[80%]  outline-none' placeholder='' value={inputTagState.input1} onChange={(e) => setInputTagState((prev) => ({...prev, input1: e.target.value.toUpperCase()}))} onKeyDown={(e) => handleEnterTags(e, "input1", "tag1")}/></div>
                 </div>
            </div>

            
            <div className=' w-full flex'>
                
                    <div className='space-y-3 w-full'>
                    <h3 className='text-[16px] font-semibold text-[#344054]'>Clothing (Ready-to-Wear) Size Options:</h3>
                    {boxesState.clothingBoxes.map((group) => (
                        <div key={group.category} className='space-y-3'>
                        <h4 className='text-[14px] font-medium text-[#344054]'>{group.category}</h4>
                        <ul className='space-y-2'>
                            {group.options.map((option, index) => (
                                <li key={index} className='flex gap-3 items-center'>
                                    <input type="checkbox" className='w-5 h-5 pt-1 border border-[#D7DBEC] rounded outline-none'/>
                                    <label htmlFor="" className='text-[16px] text-[#131523]'>{option.name}</label>
                                </li>

                            ))}
                        </ul>
                    </div>
                    )) 
                    }
                </div>
                <div className='space-y-3 w-full'>
                    <h3>Home & Interior Product Sizes:</h3>
                    {boxesState.interiorBoxes.map((group) => (
                        <div key={group.category} className='space-y-3'>
                        <h4 className='text-[14px] font-medium text-[#344054]'>{group.category}</h4>
                        <ul className='space-y-2'>
                            {group.options.map((option, index) => (
                                <li key={index} className='flex gap-3 items-center'>
                                    <input type="checkbox" className='w-5 h-5 pt-1 border border-[#D7DBEC] rounded outline-none'/>
                                    <label htmlFor="" className='text-[16px] text-[#131523]'>{option.name}</label>
                                </li>

                            ))}
                        </ul>
                    </div>
                    )) 
                    }
                </div>
            </div>
            
        </form>

        <div className='w-[30%] space-y-3'>
            <div className='flex flex-col space-y-4 bg-white rounded-[6px] p-5'>
                <h3 className='text-[16px] font-bold text-[#131523]'>Category</h3>
                    <ul className='space-y-2'>
                    {categories.map((category, index) => (
                        <li className='flex text-[#131523] text-[16px] gap-3 items-center'>
                        <input type="checkbox" className='w-5 h-5 pt-1 border border-[#D7DBEC] rounded outline-none'/>
                        <label htmlFor="" className=''>{category}</label>
                     </li>
                    ))}
                    </ul>
                <span className='text-[#E6B566] text-[16px] font-semibold cursor-pointer'>Add a New Category</span>
            </div>
            <div className='flex flex-col space-y-4 bg-white rounded-[6px] p-5'>
                <h3 className='text-[16px] font-bold text-[#131523]'>Tags</h3>
                <div className=' text-[#131523] text-[16px] gap-2 '>
                    <label htmlFor="">Add Tags</label>
                    <input type="text" className='w-full h-10 border border-[#D7DBEC] rounded text-[14px] px-2 outline-none mt-1' placeholder='Add Fabric Type, Style, or Material' value={inputTagState.input2} onChange={(e) => setInputTagState((prev) => ({...prev, input2: e.target.value.toUpperCase()}))} onKeyDown={(e) => handleEnterTags(e, "input2", "tag2")}/>
                </div>
                <div className='flex-wrap flex gap-2'>
                    { tagsState.tag2 &&
                        tagsState.tag2.map((tag, index) => (
                            <span className='py-1 px-3 rounded flex items-center bg-[#E6E9F4] w-fit gap-2 text-[#5A607F] text-[14px]' key={index}>{tag} <FiX className='h-fullpt-1 text-[#7E84A3]' onClick={() => removeTag("tag2", index)}/></span>

                        ))
                    }
                    
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
    </div>
    </div>
  )
}

export default AddProduct