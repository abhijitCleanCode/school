import React from "react";

function Card({
  heading = "Nishant Raj, class 9 A",
  description = "Here goes the complaint",
  thumbnailSrc = "https://cdn.leonardo.ai/users/65c7e6f2-f99b-497e-96f9-1f8b4696a9ae/generations/4176e0a6-3dd2-408b-a037-0d4341bfdd95/variations/Default_Design_a_sleek_and_immersive_3D_landing_page_with_amaz_1_4176e0a6-3dd2-408b-a037-0d4341bfdd95_0.jpg",
  thumbnailAlt = "Thumbnail",
  className,
}) {
  return (
    <div className={`rounded-lg p-6 shadow-sm ${className} bg-lamaSky`}>
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

const Complaints = () => {
  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Complaints;
