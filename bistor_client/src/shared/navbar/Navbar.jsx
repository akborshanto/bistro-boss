import React, { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'
import UseAuth from '../../HOOK/Auth/UseAuth'
import Swal from 'sweetalert2';
import { FaCartShopping } from "react-icons/fa6";
import UseCart from '../../HOOK/TENSTACKQUERY/UseCart';

const Navbar = () => {
  const [cart]=UseCart()
  //console.log(cart)
  /* get the user from firebase */
  const {user,signOuts}=UseAuth()
  console.log(user)
  const handleSignOut=()=>{
    signOuts()
    .then(res=>{
      Swal.fire({
        title: "ARE YOU SURE ?",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "red url(/images/trees.png)",
        backdrop: `
          rgba(30,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      });



    })
  }
  const links=<Fragment>

  <li><NavLink to='/'>HOME</NavLink></li>
  <li><NavLink to='/contact'>CONTACT</NavLink></li>
  <li><NavLink to='/dashboard'>DASAHBOARD</NavLink></li>
  <li><NavLink to='/ourmenu'>OUR MENU</NavLink></li>
  <li><NavLink to='/ourshop/SALAD'>OUR SHOP</NavLink></li>




 
  <FaCartShopping className='text-3xl' />

  <div className="badge badge-secondary">{cart.length}</div>


  </Fragment>
  return (
    <div>

    <div className="navbar  my-8">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
            </ul>



      </div>
      <a className="btn btn-ghost text-xl">BISATRO BOSS</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      {links}    
  </ul>
    </div>
    <div className="navbar-end">
   


 {user ?    <li><NavLink onClick={handleSignOut} >LogOut</NavLink></li>
   :
 <li><NavLink to='/login'>LOGIN</NavLink></li> 
 
 

  }
  
    </div>
  </div>
    </div>
  )
}

export default Navbar
