import { RouteObject } from "react-router-dom";
import Home from "../pages/home";
import MobileLayout from "../layouts/mobile";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <MobileLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
];
