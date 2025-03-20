import React from 'react'
// import './Contact.css'


const Contact = () => {
  return (
    <div className='h-[70vh] bg-[#f1f1f1] flex justify-center items-center flex-col gap-8'>
        <h1 className='text-[3rem] font-bold capitalize'>We service cities from coast to coast</h1>
        <h3 className='text-[1.9rem] text-[#666666]'>See if our purple trucks pick up near you.</h3>
        <div className="flex gap-3">
            <input className='border border-gray-500 border-solid rounded-4xl py-3 px-9 bg-white' type="text" placeholder='Enter Your Zip Code' />
            <button className='bg-[#8755de] text-white border border-white border-solid font-bold text-[1.2rem] rounded-4xl py-[10px] px-[30px]'>Check!</button>
        </div>
    </div>
  )
}

export default Contact
