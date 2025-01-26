import React from "react";

const EventList = () => {
  const timeStamp = Math.floor(Date.now());
  const date = new Date(timeStamp);
  const formattedDate = date.toLocaleString("en-UK", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Events</h1>
        <span className="text-xs text-black">View All</span>
      </div>
      <br />
      <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-gray-600">Book Fair</h1>
          <span className="text-black-300 text-xs">{formattedDate}</span>
        </div>
        <p className="mt-2 text-black-300 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa est
          doloribus ab. Iure sit id neque repellat officia? Quibusdam ratione
          nostrum excepturi sapiente corrupti tempora perferendis ad est quas
          assumenda.
        </p>
      </div>
      <br />
      <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-gray-600">Sports Day</h1>
          <span className="text-black-300 text-xs">{formattedDate}</span>
        </div>
        <p className="mt-2 text-black-300 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa est
          doloribus ab. Iure sit id neque repellat officia? Quibusdam ratione
          nostrum excepturi sapiente corrupti tempora perferendis ad est quas
          assumenda.
        </p>
      </div>
      <br />
      <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-gray-600">Art Exhibition</h1>
          <span className="text-black-300 text-xs">{formattedDate}</span>
        </div>
        <p className="mt-2 text-black-300 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa est
          doloribus ab. Iure sit id neque repellat officia? Quibusdam ratione
          nostrum excepturi sapiente corrupti tempora perferendis ad est quas
          assumenda.
        </p>
      </div>
    </div>
  );
};

export default EventList;
