import React from 'react'
import UseAuth from './../Auth/UseAuth';
import UseAxiosSecure from '../AXIOS/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const UseAdmin = () => {
    const {user}=UseAuth()
    const axiosSecure=UseAxiosSecure()


const {data:isAdmin,isPending: isAdminLoading}=useQuery({
queryKey:['admin',user?.email],
queryFn:async ()=>{
/* use axios secure */
const res=await axiosSecure.get(`/users/admin/${user?.email}`)

return res.data?.admin

    
}

})


  return [isAdmin,isAdminLoading]
}

export default UseAdmin
