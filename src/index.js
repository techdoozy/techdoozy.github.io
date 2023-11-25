import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";
import NavBar from "./components/navbar/navbar";
import './css/bootstrap.min.css'
import './css/style.css'

const AppLayout = () => {
    return (
        <>
        <NavBar />
        <Outlet />
        </>
    )
}

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
              },
              {
                path: "about",
                element: <About />,
              }
        ]
    },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);