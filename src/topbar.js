import React from "react";
import { RiShoppingBag3Line } from "react-icons/ri";
import {
    AiFillLike, AiOutlineSearch,
  } from "react-icons/ai";

const Topbar = () => {
  return <div className="sticky top-0 h-[60px] text-gray-light pl-3 p-2 transition-all ease-in bg-gray-dark  flex items-center justify-between">
    <div className="text-3xl  cursor-pointer text-white font-bold"><span className="italic">Ship</span>Kart.<span className="text-lg text-gray">in</span></div>
    <form className="w-4/6 border-2 border-gray flex justify-between bg-grey2 pr-2 items-center hover:bg-[#374151] hover:border-orange h-full rounded-full">
<input type = "text" className="w-full h-full bg-grey2 hover:border-orange hover:bg-[#374151] rounded-l-full pl-3 text-gray-light focus:border-orange" id="search box" placeholder="Search products..."></input>
<AiOutlineSearch className=" cursor-pointer hover:text-orange pl-2 h-full rounded-r-full" size={35}/>

    </form>
    
    <div className="flex gap-10 text-white justify-between pr-6">
    <AiFillLike className="hover:text-orange cursor-pointer" size={24}/>
    <RiShoppingBag3Line className="hover:text-orange cursor-pointer" size={24}/>
    </div>
  </div>
};

export default Topbar;
