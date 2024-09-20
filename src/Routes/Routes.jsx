import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import AboutUs from "../Components/Aboutus/AboutUs";
import ContactUs from "../Components/ContactUs/ContactUs";
import All_items from "../Components/All_Items/All_items";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "contactus",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/allitems",
        element: <All_items></All_items>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default routes;
