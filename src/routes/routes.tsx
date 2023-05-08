import { RouteObject } from "react-router-dom";
import Home from "@/pages/home";
import MobileLayout from "@/layouts/mobile";
import Me from "@/pages/me";
import Projects from "@/pages/projects";
import Contact from "@/pages/contact";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <MobileLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "me",
        element: <Me />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
];
