import React from 'react'

const BgFull = () => {
  return (
    <>
      <div className="my-5 bg-[url('/img/landing_we_do_return_full.webp')] bg-no-repeat bg-center bg-cover h-[100vh] flex flex-col justify-center px-[5rem] gap-[4rem] text-white">
            <div className='text-[3rem] font-bold'>
            <h1>You do the shopping.</h1>
            <h1>We do the returning.</h1>
            </div>
            <div className="flex gap-4">
                <img className='object-contain h-[3rem]' src="/img/App Store.webp" alt="" />
                <img className='object-contain h-[3rem]' src="/img/Google play.webp" alt="" />
            </div>
      </div>
    </>
  )
}

export default BgFull
