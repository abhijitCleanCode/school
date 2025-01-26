import React from "react";

import { UserCards } from "../components";

//* get this from db
const classes = [
  { class: 1, section: "A", to: "/class" },
  { class: 1, section: "B", to: "/class" },
  { class: 2, section: "A", to: "/class" },
  { class: 2, section: "B", to: "/class" },
  { class: 3, section: "A", to: "/class" },
  { class: 3, section: "B", to: "/class" },
  { class: 4, section: "A", to: "/class" },
  { class: 4, section: "B", to: "/class" },
  { class: 5, section: "A", to: "/class" },
  { class: 5, section: "B", to: "/class" },
  { class: 6, section: "A", to: "/class" },
  { class: 6, section: "B", to: "/class" },
  { class: 7, section: "A", to: "/class" },
  { class: 7, section: "B", to: "/class" },
  { class: 8, section: "A", to: "/class" },
  { class: 8, section: "B", to: "/class" },
  { class: 9, section: "A", to: "/class" },
  { class: 9, section: "B", to: "/class" },
  { class: 10, section: "A", to: "/class" },
  { class: 10, section: "B", to: "/class" },
];

const Students_classes = () => {
  return (
    <section>
      <h1 className="text-2xl font-normal">
        View Students according to classes
      </h1>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {classes.map((item, index) => (
          <UserCards
            key={index}
            title={"class " + item.class}
            subtitle={"section " + item.section}
            to="class"
          />
        ))}
      </div>
    </section>
  );
};

export default Students_classes;
