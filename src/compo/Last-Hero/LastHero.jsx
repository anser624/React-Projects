import React from 'react'


const LastHero = () => {
  return (
    <>
     <div>
          <p className='text-[#2e2d2d] font-bold text-center text-[3rem] my-[4rem]'>Returning the new way is as easy <br/> as it sounds</p>
          <div className="flex justify-evenly items-center">
                <img className='cursor-pointer h-[25%] w-[25%]' src="/img/landing_grid_img1.webp" alt="" />
                <img className='cursor-pointer h-[25%] w-[25%]' src="/img/landing_grid_img2.webp" alt="" />
                <img className='cursor-pointer h-[25%] w-[25%]' src="/img/landing_grid_img3.webp" alt="" />
          </div>
        <button className='my-[4rem] ms-[36rem] font-medium text-[1rem] text-white bg-[#8755de] p-4 w-[15%] border border-white border-solid rounded-4xl'>Dowonload App</button>  
      </div> 
    </>
  )
}

export default LastHero
