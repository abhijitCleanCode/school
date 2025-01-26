import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Admin,
  Announcements,
  Classes,
  ClassesList,
  Complaints,
  Events,
  Exam,
  Finance,
  SingleTeacherDetails,
  StudentDetails,
  Students_classes,
  SubjectList,
  SubjectList_classes,
  Teachers,
  TimeTable,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Admin />,
      },
      {
        path: "/students",
        element: <Students_classes />,
      },
      {
        path: "/students/class",
        element: <Classes />,
      },
      {
        path: "/students/details/:id",
        element: <StudentDetails />,
      },
      {
        path: "/list/teachers",
        element: <Teachers />,
      },
      {
        path: "/teachers/details/123456789",
        element: <SingleTeacherDetails />,
      },
      {
        path: "/list/classes",
        element: <ClassesList />,
      },
      {
        path: "/timetable",
        element: <TimeTable />,
      },
      {
        path: "/list/subjects",
        element: <SubjectList />,
      },
      {
        path: "/list/subjects/class",
        element: <SubjectList_classes />,
      },
      {
        path: "/list/events",
        element: <Events />,
      },
      {
        path: "/list/announcements",
        element: <Announcements />,
      },
      {
        path: "/exams",
        element: <Exam />,
      },
      {
        path: "/list/complaints",
        element: <Complaints />,
      },
      {
        path: "/finances",
        element: <Finance />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
