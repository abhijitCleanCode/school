import React from "react";
import { FaPlus } from "react-icons/fa6";

import { UserCards } from "../components";

//* get this from db
const classes = [
  { class: 1, section: "A" },
  { class: 1, section: "B" },
  { class: 2, section: "A" },
  { class: 2, section: "B" },
  { class: 3, section: "A" },
  { class: 3, section: "B" },
  { class: 4, section: "A" },
  { class: 4, section: "B" },
  { class: 5, section: "A" },
  { class: 5, section: "B" },
  { class: 6, section: "A" },
  { class: 6, section: "B" },
  { class: 7, section: "A" },
  { class: 7, section: "B" },
  { class: 8, section: "A" },
  { class: 8, section: "B" },
  { class: 9, section: "A" },
  { class: 9, section: "B" },
  { class: 10, section: "A" },
  { class: 10, section: "B" },
];

const ClassesList = () => {
  return (
    <section>
      <div className="flex items-center justify-between flex-wrap">
        <h1 className="text-2xl font-normal">Add Classes</h1>

        <div className="flex items-center gap-4 self-end">
          <button className="w-12 h-12 flex items-center justify-center rounded-full bg-lamaYellow">
            <FaPlus size={24} />
          </button>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {classes.map((item, index) => (
          <UserCards
            key={index}
            title={"class " + item.class}
            subtitle={"section " + item.section}
          />
        ))}
      </div>
    </section>
  );
};

export default ClassesList;
