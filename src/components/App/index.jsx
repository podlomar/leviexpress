import React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Reservation } from "../Reservation";
import { Home } from "../Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/reservation/:id", element: <Reservation /> },
]);

export const App = () => (
  <>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </>
);
