import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <>
      <div className="flex justify-between h-[100vh] capitilize px-8 text-[2rem] " style={{ flexDirection: props.direction?props.direction:"row" }}>
        <div className="flex flex-col justify-center gap-12 flex-[1] ps-[7rem]">
          <div className="flex flex-col gap-[2.5rem]">
            <h2 className="font-bold">
            Automatically sync <br /> all your purchases
            </h2>
            <p className="text-justify text-[1.6rem] text-[grey]">
              Manage your returns from top retailers, <br/> stay on top of return
              policies, <br /> and track your purchases all in one place.
            </p>
          </div>
          <ul className="flex flex-col gap-1" style={{ display:"none"?props.display:"none" }}>
            <li className="flex items-center gap-2 text-2xl">
              <span>
                <img className='mx-[5px] h-[1rem] w-[1rem] object-contain' src="/img/GreenTick.png" alt="" />
              </span>
              no more packaging.
            </li>
            <li className="flex items-center gap-2 text-2xl">
              <span>
                <img className='mx-[5px] h-[1rem] w-[1rem] object-contain' src="/img/GreenTick.png" alt="" />
              </span>
              no more printing.
            </li>
            <li className="flex items-center gap-2 text-2xl">
              <span>
                <img className='mx-[5px] h-[1rem] w-[1rem] object-contain' src="/img/GreenTick.png" alt="" />
              </span>
              no more driving.
            </li>
          </ul>
          <button className="border-1 border-solid border-white ms-[10rem] font-medium rounded-3xl text-[1rem] capitilize text-white bg-[#8755de] p-[1rem] w-[30%]" style={{ display:"none"?props.display:"none" }}>{props.button}</button>
        </div>
        <div className="flex flex-[1] justify-center items-center">
          <img className="object-cover h-[70%] w-[80%] rounded-4xl" src={props.image} alt="" />
        </div>
      </div>
    </>
  );
};

export default Card;
