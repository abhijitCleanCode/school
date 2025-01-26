import React from "react";
import { Link } from "react-router-dom";
import {
  FaCalendarCheck,
  FaIndianRupeeSign,
  FaPen,
  FaPhone,
} from "react-icons/fa6";

import { attendance, subject, teacher } from "../assets";
import { Announcement, Performance } from "../components";

const role = "admin";

const SingleTeacherDetails = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <img
                src="https://cdn.leonardo.ai/users/5a60590c-87f6-4ff2-a94f-78f8f01a2f5c/generations/420aea1b-f34d-46e4-9925-46a8413e4be5/Leonardo_Anime_XL_An_animestyle_man_draw_with_light_brown_skin_3.jpg"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">Nishant Raj</h1>
                {role === "admin" && (
                  <span className="cursor-pointer rounded-full bg-lamaYellow p-2">
                    <FaPen size={20} color="#6B7280" />
                  </span>
                )}
              </div>
              <p className="text-sm text-black-300">
                <strong>Teacher details goes here, example: </strong>Joined on
                1st Jan 2023, Major in Computer Science. Currently pursuing PHD
                from xyz university.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <span>
                    <FaIndianRupeeSign size={20} color="#000" />
                  </span>
                  <span>70000</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <span>
                    <FaCalendarCheck size={20} color="#000" />
                  </span>
                  <span>13+ years</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <span>
                    <FaPhone />
                  </span>
                  <span>+91 123456789</span>
                </div>
              </div>
            </div>
          </div>

          {/* SMALL CARDS */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* CARD 1*/}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <img
                src={attendance}
                alt=""
                width={24}
                height={24}
                className="w-8 h-8"
              />
              <div className="">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <img
                src={subject}
                alt=""
                width={24}
                height={24}
                className="w-8 h-8"
              />
              <div className="">
                <h1 className="text-xl font-semibold">8</h1>
                <span className="text-sm text-gray-400">Subjects</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <img
                src={teacher}
                alt=""
                width={24}
                height={24}
                className="w-8 h-8"
              />
              <div className="">
                <h1 className="text-xl font-semibold">Class 10 B</h1>
                <span className="text-sm text-gray-400">Class Teacher</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="w-full flex flex-col lg:flex-row gap-4 mt-4">
          <div className="bg-white p-4 rounded-md">
            <h1 className="text-xl font-semibold">Important Links</h1>
            <span>Here you can add important links</span>
            <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
              <Link
                className="p-3 rounded-md bg-lamaSkyLight"
                href={`/list/classes?supervisorId=${teacher.id}`}
              >
                Teacher&apos;s Classes
              </Link>
              <Link
                className="p-3 rounded-md bg-lamaPurpleLight"
                href={`/list/students?teacherId=${teacher.id}`}
              >
                Teacher&apos;s Subjects
              </Link>
              <Link
                className="p-3 rounded-md bg-lamaYellowLight"
                href={`/list/lessons?teacherId=${teacher.id}`}
              >
                Teacher&apos;s Payment Status
              </Link>
              <Link
                className="p-3 rounded-md bg-pink-50"
                href={`/list/exams?teacherId=${teacher.id}`}
              >
                Teacher&apos;s Salary Details
              </Link>
              <Link
                className="p-3 rounded-md bg-lamaSkyLight"
                href={`/list/assignments?teacherId=${teacher.id}`}
              >
                Teacher&apos;s Qualification
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Performance />
        </div>
        <div className="mt-4">
          <Announcement />
        </div>
      </div>
    </div>
  );
};

export default SingleTeacherDetails;
