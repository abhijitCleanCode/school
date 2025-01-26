import React from "react";
import { Link } from "react-router-dom";

// icons
import {
  FaBook,
  FaCalendar,
  FaHouse,
  FaIndianRupeeSign,
  FaPersonChalkboard,
  FaTrophy,
  FaCircleExclamation,
  FaFilePen,
} from "react-icons/fa6";
import { HiSpeakerphone } from "react-icons/hi";
import { PiStudentBold } from "react-icons/pi";
import { MdClass } from "react-icons/md";

//? get the menu from api
const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: FaHouse,
        label: "Home",
        to: "/",
        visible: ["admin", "teacher", "student"],
      },
      {
        icon: FaPersonChalkboard,
        label: "Teachers",
        to: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: PiStudentBold,
        label: "Students",
        to: "/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: FaCalendar,
        label: "Time Table",
        to: "/timetable",
        visible: ["admin", "teacher", "student"],
      },
      {
        icon: MdClass,
        label: "Classes",
        to: "/list/classes",
        visible: ["admin", "teacher", "student"],
      },
      {
        icon: FaBook,
        label: "Subjects",
        to: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: FaTrophy,
        label: "Events",
        to: "/list/events",
        visible: ["admin", "teacher", "student"],
      },
      {
        icon: HiSpeakerphone,
        label: "Announcements",
        to: "/list/announcements",
        visible: ["admin", "teacher", "student"],
      },
      {
        icon: FaFilePen,
        label: "Exams",
        to: "/exams",
        visible: ["admin", "teacher", "student"],
      },
      {
        icon: FaCircleExclamation,
        label: "Complaints",
        to: "/list/complaints",
        visible: ["admin"],
      },
      {
        icon: FaIndianRupeeSign,
        label: "Finances",
        to: "/finances",
        visible: ["admin"],
      },
      //   {
      //     // icon: "/class.png",
      //     label: "Classes",
      //     href: "/list/classes",
      //     visible: ["admin", "teacher"],
      //   },
      //   {
      //     // icon: "/lesson.png",
      //     label: "Lessons",
      //     href: "/list/lessons",
      //     visible: ["admin", "teacher"],
      //   },
      //   {
      //     // icon: "/exam.png",
      //     label: "Exams",
      //     href: "/list/exams",
      //     visible: ["admin", "teacher", "student", "parent"],
      //   },
      //   {
      //     // icon: "/assignment.png",
      //     label: "Assignments",
      //     href: "/list/assignments",
      //     visible: ["admin", "teacher", "student", "parent"],
      //   },
      //   {
      //     icon: "/result.png",
      //     label: "Results",
      //     href: "/list/results",
      //     visible: ["admin", "teacher", "student", "parent"],
      //   },
      //   {
      //     icon: "/attendance.png",
      //     label: "Attendance",
      //     href: "/list/attendance",
      //     visible: ["admin", "teacher", "student", "parent"],
      //   },
      //   {
      //     icon: "/calendar.png",
      //     label: "Events",
      //     href: "/list/events",
      //     visible: ["admin", "teacher", "student", "parent"],
      //   },
      //   {
      //     icon: "/message.png",
      //     label: "Messages",
      //     href: "/list/messages",
      //     visible: ["admin", "teacher", "student", "parent"],
      //   },
      //   {
      //     icon: "/announcement.png",
      //     label: "Announcements",
      //     href: "/list/announcements",
      //     visible: ["admin", "teacher", "student", "parent"],
      //   },
    ],
  },
  //   {
  //     title: "OTHER",
  //     items: [
  //       {
  //         icon: "/profile.png",
  //         label: "Profile",
  //         href: "/profile",
  //         visible: ["admin", "teacher", "student", "parent"],
  //       },
  //       {
  //         icon: "/setting.png",
  //         label: "Settings",
  //         href: "/settings",
  //         visible: ["admin", "teacher", "student", "parent"],
  //       },
  //       {
  //         icon: "/logout.png",
  //         label: "Logout",
  //         href: "/logout",
  //         visible: ["admin", "teacher", "student", "parent"],
  //       },
  //     ],
  //   },
];

const Menu = () => {
  // const user = getUser();
  const role = "admin";

  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i, index) => (
        <div className="flex flex-col gap-2" key={index}>
          <span className="hidden lg:block text-black-100 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  to={item.to}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-slate-900 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                >
                  <span>{<item.icon size={20} color="#6B7280" />}</span>
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
