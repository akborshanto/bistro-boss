import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layout/Main";
import Errors from "../ERROR/Error";
import Home from "../PAGE/home/Home";
import Contact from "../PAGE/contact/Contact";
//import Dashboard from "../PAGE/Dashboard/Dashboard";
import OurMenu from "../PAGE/OurMenu/OurMenu";
import OurShop from "../PAGE/Ourshop/OurShop";
import Login from "../PAGE/login/Login";
import Register from "../PAGE/register/Register";
import PrivateRoute from "../private/PrivateRoute";
import Cart from "../PAGE/dashbord/cart/Cart";
import Dashboard from "../layout/dashbord/Dashboard";
import AllUser from "../layout/dashbord/allUser/AllUser";
import AddItems from "../PAGE/dashbord/addItems/AddItems";
import AdminRoute from "../private/AdminRoute";
import ManageItems from "../PAGE/dashbord/mangeItems/ManageItems";
import UpdateItem from "../PAGE/dashbord/mangeItems/update/UpdateItem";

/* tns */

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errors></Errors>,
    /*  all children componone of Main Layout   */
    children: [
      /* home */

      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            <Contact></Contact>
          </PrivateRoute>
        ),
      },
      /*     {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      }, */
      {
        path: "/ourmenu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/ourShop/:title",
        element: <OurShop></OurShop>,
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
  /* dashboard cart */
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        {" "}
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      { path: "cart", element: <Cart></Cart> },
      /* admin ruote */
      {
        path: "allUsers",

        element: (
          <AdminRoute>
            <AllUser></AllUser>
          </AdminRoute>
        ),
      },

      {
        path: "manageItems",
        element: <ManageItems></ManageItems>,
      },
      {
        path: 'updateItems/:id',
        element: <UpdateItem></UpdateItem>,

        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/reciepe/${params.id}`),
      },

      {
        path: "addItems",
        element: <AddItems></AddItems>,
      },
    ],
  },
]);
