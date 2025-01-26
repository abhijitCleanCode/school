import React from "react";
import { FaEye, FaMagnifyingGlass, FaPlus, FaTrash } from "react-icons/fa6";

import Table from "../components/Table";
import { teacherData } from "../constants/teachers";
import { Link } from "react-router-dom";

const role = "admin";

const renderRow = (item) => {
  return (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">
        <img
          src="https://cdn.leonardo.ai/users/bfb4e582-8eca-488b-bc34-8eb777a49d60/generations/23a3125a-d1c9-4ec3-ac39-aecefc9399ba/variations/alchemyrefiner_alchemymagic_0_23a3125a-d1c9-4ec3-ac39-aecefc9399ba_0.jpg"
          alt=""
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          {/* <p className="text-xs text-gray-500">{item.class.name}</p> */}
        </div>
      </td>
      <td className="hidden md:table-cell">{item.studentId}</td>
      {role === "admin" && (
        <td className="p-4">
          <div className="flex items-center gap-4">
            <Link to={item.to} className="cursor-pointer">
              <FaEye size={20} color="#8B5DFF" />
            </Link>
            <span className="cursor-pointer">
              <FaTrash size={20} color="#F75555" />
            </span>
          </div>
        </td>
      )}
    </tr>
  );
};

const Teachers = () => {
  const columns = [
    {
      header: "Name",
      accessor: "name",
    },
    {
      header: "Student ID",
      accessor: "studentId",
      className: "hidden md:table-cell",
    },
    ...(role === "admin"
      ? [
          {
            header: "Actions",
            accessor: "action",
          },
        ]
      : []),
  ];

  return (
    <section>
      {/* table ui */}
      <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
        {/* top */}
        <div className="flex items-center justify-between">
          <h1 className="hidden md:block text-lg font-semibold text-slate-900">
            All Teachers
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            {/* search bar */}
            <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
              <span>
                <FaMagnifyingGlass color="#6B7280" size={14} />
              </span>
              <input
                type="text"
                placeholder="Search..."
                className="w-[200px] p-2 bg-transparent outline-none"
              />
            </div>

            <div className="flex items-center gap-4 self-end">
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                <FaPlus size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* LIST */}
        <Table columns={columns} renderRow={renderRow} data={teacherData} />

        {/* pagination */}
        <div className="flex items-center justify-between my-[16px]">
          <button className="bg-[#EA6365] text-white px-4 py-2 rounded-lg font-medium">
            Prev
          </button>
          <button className="bg-[#EA6365] text-white px-4 py-2 rounded-lg font-medium">
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
