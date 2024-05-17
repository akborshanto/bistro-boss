import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../layout/Main";
import Errors from "../ERROR/Error";
import Home from "../PAGE/home/Home";


export const router =createBrowserRouter
([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Errors></Errors>,
/*  all children componone of Main Layout   */
children:[
/* home */

{
    path:'/',
    element:<Home></Home>
}




]





    },
  ]);