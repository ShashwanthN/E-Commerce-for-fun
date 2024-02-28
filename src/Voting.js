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
  PriceOriginal
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
    <div className="">
      <div className="flex pl-4 pr-4 text-2xl max:h-[200px]  justify-between items-center pb-4 pt-4">
        <div className="flex justify-between items-center">
          <div className="w-[150px]">
            <img
              className=" h-full marginCenter"
              src={image}
              alt="iPhone"
            ></img>
          </div>
          <div className="pl-10">
            <h1>{brandname}</h1>
            <div className="text-lg text-gray">Manufacturer: {model}</div>
            <p className="text-sm text-gray">Specs: {specs}</p>
            <p className="text-sm text-gray">{battery}</p>
            <p className="text-sm text-gray">{ram}</p>
            <div className="flex-row pt-2 divide-x divide-gray-light flex">
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
          <div className="bg-green text-sm w-[70px] p-1 rounded-full flex items-center justify-center font-medium">
  <div>upto {percent}%</div>
</div>

            <div className="text-4xl">₹{PriceOffer}</div>
            <div className="text-lg line-through">₹{PriceOriginal}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
