import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Courses } from "./Pages/Courses";
import { Blog } from "./Pages/Blog";
import { Blogdetails } from "./Pages/Blogdetails";



let allroutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "courses",
    element: <Courses />,
  },
  {
    path: "blog",
    element: <Blog/>
  },
  {
    path: "/blog/:id",
    element: <Blogdetails/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={allroutes} />
  </React.StrictMode>
);
