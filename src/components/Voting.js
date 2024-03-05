import { useState } from "react";

import {
  AiOutlineLike,
  AiFillDislike,
  AiOutlineDislike,
  AiFillLike,
} from "react-icons/ai";

export function Voting({
  brandname,
  model,
  specs,
  battery,
  ram,
  image,
  PriceOffer,
  PriceOriginal,
}) {
  var [liked, setLiked] = useState(false);
  var [disliked, setDisliked] = useState(false);

  const handleLikeClick = () => {
    if (disliked) {
      setDisliked(false);
    }
    setLiked(!liked);
    liked++;
    return liked;
  };
  const handleDislikeClick = () => {
    if (liked) {
      setLiked(false);
    }
    setDisliked(!disliked);
    disliked++;
    return disliked;
  };

  const offerPrice = parseFloat(PriceOffer.replace(/,/g, ""));
  const originalPrice = parseFloat(PriceOriginal.replace(/,/g, ""));

  const percent = (
    ((originalPrice - offerPrice) / originalPrice) *
    100
  ).toFixed(0);

  return (
    <div className="cursor-pointer hover:scale-95 transition-all z-0 duration-500 bg-bgSecondary rounded-xl border border-divider mb-2 md:w-full">
      <div className="flex pl-4 pr-4 text-2xl max:h-[200px]  justify-between items-center pb-4 pt-4">
        <div className="flex justify-between  items-center">
          <div className="w-[150px]">
            <img
              className=" hover:scale-125 transition-all duration-500 cursor-pointer h-full  shadow-white marginCenter"
              src={image}
              alt="iPhone"
            ></img>
          </div>
          <div className="pl-10">
            <h1 className="font-">{brandname}</h1>
            <div className="text-lg font-regular text-textSecondary">Manufacturer: {model}</div>
            <p className="text-sm font-regular text-textSecondary">Specs: {specs}</p>
            <p className="text-sm font-regular text-textSecondary">{battery}</p>
            <p className="text-sm font-regular text-textSecondary">{ram}</p>
            <div className="flex-row pt-2 divide-x divide-divider flex">
              <div className="flex pb-2 pr-2 hover:text-orange focus:text-orange">
                <button onClick={handleLikeClick}>
                  {liked ? (
                    <AiFillLike size={22} />
                  ) : (
                    <AiOutlineLike size={22} />
                  )}
                </button>
              </div>
              <div className="flex pt-2 hover:text-orange pl-2">
                <button onClick={handleDislikeClick}>
                  {disliked ? (
                    <AiFillDislike size={22} />
                  ) : (
                    <AiOutlineDislike size={22} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col ">
            <div className="bg-green text-bgPrimary text-sm w-2/3 p-1 rounded-full flex items-center justify-center font-bold">
              <div>upto {percent}%</div>
            </div>

            <div className="text-4xl">₹{PriceOffer}</div>
            <div className="text-lg text-textSecondary line-through">₹{PriceOriginal}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
