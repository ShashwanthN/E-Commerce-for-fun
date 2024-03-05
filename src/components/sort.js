import React from "react";

const Sort = () => {
  return (
    <div className=" font-medium  bg-bglighter border-divider border-b">
    <div className="pl-20 pr-20 p-1 items-center ">
      <div className="justify-between  text-lg  text-textSecondary  flex">
        <button className="hover:text-textPrimary shadow-textPrimary">For You</button>
        <button className="hover:text-textPrimary ">On Sale</button>
        <button className="hover:text-textPrimary">Recently Launched</button>
        <button className="hover:text-textPrimary">Deals</button>
        <button className="hover:text-textPrimary">Top Picks</button>
      </div>
    </div>
    </div>
  );
};

export default Sort;
