import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import AboutUs from "../Components/Aboutus/AboutUs";
import ContactUs from "../Components/ContactUs/ContactUs";
import All_items from "../Components/All_Items/All_items";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import AddItems from "../Components/addItems/addItems";
import UpdateItems from "../Components/UpdateItems/UpdateItems";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/craftItem'),
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
        loader: () => fetch('http://localhost:5000/craftItem'),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path:"additems",
        element:<AddItems></AddItems>,
      },
      {
        path:"updateitems/:id",
        element: <UpdateItems></UpdateItems>,
        loader: ({params}) => fetch(`http://localhost:5000/craftItem/${params.id}`)
      }
    ],
  },
]);

export default routes;
