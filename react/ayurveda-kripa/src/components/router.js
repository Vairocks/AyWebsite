import React from "react";
import {createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import Vision from '../pages/Vision';
import  AppFeatures  from '../pages/AppFeatures'; 
import Blogs from '../pages/Blogs';
    


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
    {
      path: "/_home",
      element: <Home />,
    },
    {
      path: "/_vision",
      element: <Vision />,
    },
    {
      path: "/_app",
      element: <AppFeatures />,
    },
    {
      path: "/_blogs",
      element: <Blogs />,
    },
  ]);

  export default router;