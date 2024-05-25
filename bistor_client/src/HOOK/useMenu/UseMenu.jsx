import React, { useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from "../AXIOS/UseAxiosSecure";
import UseAxiosPublic from "../AXIOS/AxiosPublic";
const UseMenu = () => {
//const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure=UseAxiosSecure()
  const axiosPublic=UseAxiosPublic()
 /*  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_API_URL}/reciepe`)
      .then((import { useQuery } from '@tanstack/react-query';
res) => res.j
son())
      .then((data) => {
        setMenu(data);
      });
  }, []);

 */

/* Tenstach query */

const {data:menu=[],isPending,refetch}=useQuery({
queryKey:['reciepe'],
queryFn:async ()=>{

const res=await axiosPublic.get(`${import.meta.env.VITE_API_URL}/reciepe`)
return res.data
}


})



  return [menu, loading,refetch];
};

export default UseMenu;
