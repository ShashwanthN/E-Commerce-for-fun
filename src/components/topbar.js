import React from "react";
import { RiShoppingBag3Line } from "react-icons/ri";
import {  AiFillLike, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="h-[60px]  border-b border-divider  text-textPrimary pl-3 p-2 transition-all ease-in bg-bgPrimary  flex items-center justify-between">
      <div className="flex w-full items-center">
        <div className="text-3xl cursor-pointer text-textPrimary font-bold">
        <Link to="/Home" className="hover:text-orange">
          {/* <AiFillHome className="hover:text-orange cursor-pointer" size={24} /> */}
          <span className="italic">IMC</span>orp.
          <span className="text-lg text-textSecondary">in</span>
        </Link>
        </div>
      </div>
      <form className="border-2 shadow-textPrimary opacity-30  border-borderCol w-full flex  justify-between bg-bgTertiary pr-2 items-center  hover:opacity-70 h-full rounded-md">
        <input
          type="text"
          className="w-full h-full bg-bgTertiary focus:outline-none rounded-l-md pl-3 flex open:border-none active:border-none text-textPrimary"
          id="search box"
          placeholder="Search products..."
        ></input>
        <Link to="/search">
          <AiOutlineSearch
            className=" cursor-pointer hover:text-orange pl-2 h-full rounded-r-full"
            size={35}
          />
        </Link>
      </form>
      <div className="flex text-textSecondary w-full items-center justify-evenly pr-6">
        <div className="flex hover:text-textPrimary cursor-pointer items-center"><AiFillLike className=" p-1 flex cursor-pointer" size={30} ></AiFillLike>Liked
        </div>
        <RiShoppingBag3Line
          className="hover:text-textPrimary flex cursor-pointer"
          size={30}
        />
      </div>
    </div>
  );
};

export default Topbar;
