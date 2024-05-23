import React from 'react'
import axios from 'axios'



export const axiosSecure=axios.create({

    baseURL:import.meta.env.VITE_API_URL
      })
const UseAxiosPublic = () => {

  return axiosSecure
}

export default UseAxiosPublic
