import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../layout/Main";
import Errors from "../ERROR/Error";
import Home from "../PAGE/home/Home";
import Contact from "../PAGE/contact/Contact";
import Dashboard from "../PAGE/Dashboard/Dashboard";
import OurMenu from "../PAGE/OurMenu/OurMenu";
import OurShop from "../PAGE/Ourshop/OurShop";


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
},
{
  path:'/contact',
  element:<Contact></Contact>
},{
  path:'/dashboard',
  element:<Dashboard></Dashboard>
},
{
  path:"/ourmenu",
  element:<OurMenu></OurMenu>
},
{
  path:'/ourShop',
  element:<OurShop></OurShop>
}




]





    },
  ]);