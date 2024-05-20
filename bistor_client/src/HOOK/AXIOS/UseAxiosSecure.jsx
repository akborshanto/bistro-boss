import axios from 'axios'
import React from 'react'
export const axiosSecure=axios.create({
    baseURL:`${import.meta.env.VITE_API_URL}`
})
const UseAxiosSecure=()=>{
    return axiosSecure

}



export default UseAxiosSecure
