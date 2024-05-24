import React from 'react'
import UseAuth from './../HOOK/Auth/UseAuth';
import UseAdmin from './../HOOK/TENSTACKQUERY/UseAdmin';
import { useLocation, Navigate } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const {user,loading}=UseAuth()
    const [isAdmin,isAdminLoading]=UseAdmin()
    const location=useLocation()
/*     if(loading || isAdminLoading){
        return <div>
        <span className="loading loading-ball loading-xs"></span>
    <span className="loading loading-ball loading-sm"></span>
    <span className="loading loading-ball loading-md"></span>
    <span className="loading loading-ball loading-lg"></span>
        </div>
    } */

if(user  && isAdmin){
    return children
}

  return <Navigate to='/' state={{from:location}} replace></Navigate>
}
export default AdminRoute
