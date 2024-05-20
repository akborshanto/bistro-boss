import React from 'react'
import UseAuth from '../HOOK/Auth/UseAuth'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
const {user,loading,setLoading}=UseAuth()
const location=useLocation()
if(loading){
    return <div>
    <span className="loading loading-ball loading-xs"></span>
<span className="loading loading-ball loading-sm"></span>
<span className="loading loading-ball loading-md"></span>
<span className="loading loading-ball loading-lg"></span>
    </div>
}
if(user){

    return children
}



  return (    <Navigate to='/login' state={{from:location
  }} replace></Navigate>  )
}

export default PrivateRoute
