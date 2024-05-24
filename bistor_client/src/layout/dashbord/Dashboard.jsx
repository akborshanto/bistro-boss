import React, { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";
import UseCart from "../../HOOK/TENSTACKQUERY/UseCart";
import UseAdmin from "../../HOOK/TENSTACKQUERY/UseAdmin";

const Dashboard = () => {





/* is admin */
const [isAdmin]=UseAdmin();







const [cart]=UseCart()
const links=<Fragment>

{

isAdmin ?<Fragment>

<li> 
<NavLink to="/dashboard/addMinHome">Admin Home<h3 className="font-bold text-2xl text-blue-500"></h3></NavLink>
</li>
<li> 
<NavLink to="/dashboard/addItems">Add Items<h3 className="font-bold text-2xl text-blue-500"></h3></NavLink>
</li>
<li> 
<NavLink to="/dashboard/manageItems">Manage Items<h3 className="font-bold text-2xl text-blue-500"></h3></NavLink>
</li>
<li> 
<NavLink to="/dashboard/manageBooking">Manage Booking<h3 className="font-bold text-2xl text-blue-500"></h3></NavLink>
</li>
<li> 
<NavLink to="/dashboard/allUsers">All Users<h3 className="font-bold text-2xl text-blue-500"></h3></NavLink>
</li>






</Fragment>

:<Fragment>

<li>
{/* abode,dwelling,cudgel,whang ,habitaion,quarter,gomicile,*/}
<NavLink to="">User Home</NavLink>
</li>
<li>
{/* reservation/protection,conservation/UpKeep/conservancy */}
<NavLink to="">Reservation</NavLink>
</li>
<li> 
<NavLink to="/dashboard/cart">My Cart<h3 className="font-bold text-2xl text-blue-500">({cart.length})</h3></NavLink>
</li>

<li>
<NavLink to="">Add a Review</NavLink>
</li>
<li>
<NavLink to="">My Booking</NavLink>
</li>

<div>
<li>
<NavLink to="/">HOME</NavLink>
</li>
<li>
<NavLink to="">Menu</NavLink>
</li>


</div>


</Fragment>

}





</Fragment>

  return (
    <div      className="container mx-auto flex justify-between gap-8">

      <div className="flex ">
        <div className=" w-64 min-h-full bg-orange-300">
          <ul className="menu flex">



          {links}
          </ul>
        </div>
      </div>
      {/* dashboard {} */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
