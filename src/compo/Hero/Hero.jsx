import React from 'react'
// import './Hero.css'
function Hero() {
  return (
    <>
      <div className="flex justify-center h-[100vh] capitalize text-[1.5rem] bg-[#f5f7fa]">
        <div className="flex flex-col justify-center ps-[7rem] gap-12 flex-[1]">
            <div className='flex flex-col gap-6 '>
                <h4 className='text-[#8755de] text-4xl'>You Shop. We Returns.</h4>
                <h1 className='text-6xl font-bold'>Home Pickups</h1>
                <h3>Returns picked up from your <br/> doorstep</h3>
            </div>
            <ul className='flex flex-col gap-2'>
                <li className='flex items-center'><span><img className='mx-[10px] h-[1rem] w-[1rem] object-contain' src="/img/GreenTick.png" alt=""/></span>no more packaging.</li>
                <li className='flex items-center'><span><img className='mx-[10px] h-[1rem] w-[1rem] object-contain' src="/img/GreenTick.png" alt=""/></span>no more printing.</li>
                <li className='flex items-center'><span><img className='mx-[10px] h-[1rem] w-[1rem] object-contain' src="/img/GreenTick.png" alt=""/></span>no more driving.</li>
            </ul>
            <div className="flex gap-[2rem] mb-6">
                <div className="">
                    <img className='w-[10rem]' src="/img/App Store.webp" alt="playstore" />
                </div>
                <div className="">
                    <img className='w-[11rem]' src="/img/Google play.webp" alt="googleplay" />
                </div>
            </div>
        </div>
        <div className="flex-[1] pe-4">
                <img className='object-contain w-[100%] h-[100%]' src="/img/landing_hero.webp" alt="" />
        </div>
      </div>
    </>
  )
}

export default Hero

// .playstore{
//   gap: 2rem;
//   display: flex;
// }
