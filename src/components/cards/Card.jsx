import React from "react";
import { Link } from "react-router-dom";

function Card3({
  heading = "Nishant Raj, class 9 A",
  description = "Here goes the complaint",
  thumbnailSrc = "https://cdn.leonardo.ai/users/0002c073-65cb-43e1-860e-14d9908bd297/generations/5acaa029-4a9f-47b1-af1b-b373eaacfb77/Default_A_Rabbit_made_entirely_of_Strawberry_Coating_each_rese_0.jpg",
  thumbnailAlt = "Thumbnail",
  className,
}) {
  return (
    <div className={`rounded-lg p-6 shadow-sm ${className}`}>
      <div className="overflow-hidden rounded-lg">
        <img
          className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
          src={thumbnailSrc}
          alt={thumbnailAlt}
        />
      </div>
      <h3 className="pt-5 text-[14px] font-normal text-gray-600 block">
        {heading}
      </h3>
      <p className="font-normal text-gray-500 cursor-pointer text-lg duration-300 transition hover:text-[#FA5252] mt-2">
        {description}
      </p>
    </div>
  );
}

const Card = () => {
  return (
    <div className={`rounded-lg p-6 shadow-sm ${className}`}>
      {/* <div className="overflow-hidden rounded-lg">
        <img
          className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
          src={thumbnailSrc}
          alt={thumbnailAlt}
        />
      </div>
      <h3 className="pt-5 text-[14px] font-normal text-gray-600 block">
        {heading}
      </h3>
      <p className="font-normal text-gray-500 cursor-pointer text-lg duration-300 transition hover:text-[#FA5252] mt-2">
        {description}
      </p> */}

      <Card3 />
      <Card3 />
      <Card3 />
    </div>
  );
};

export default Card;
