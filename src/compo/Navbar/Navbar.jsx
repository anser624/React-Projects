import React from 'react'


const Navbar = () => {
  return (
    <>
        <header className='flex justify-between item-center py-[2.5rem] px-[3rem]'>
            <div>
                <img className='h-[2.5rem] object-contain' src="img/logo.webp" alt="" />
            </div>
            <div className='flex gap-20 text-[1.1rem] items-center'>
                <ul className='font-bold flex gap-5'>
                    <li>About</li>
                    <li>How It Works</li>
                    <li>Pricing</li>
                </ul>
                <button className='border border-white border-solid text-white text-[1.1rem] py-[0.6rem] px-[1.5rem] bg-[#8755de] rounded-4xl'>Schedule A Pickup</button>
            </div>
        </header> 
    </>
  );
};

export default Navbar;

// .ul-btn button:hover{
//     color: white;
//     filter: invert(1);
//     transition: all 0.7s ease-in-out;
// }